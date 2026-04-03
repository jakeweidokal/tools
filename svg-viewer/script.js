document.addEventListener('DOMContentLoaded', function () {
  // DOM elements
  const svgInput = document.getElementById('svg-input');
  const fileInput = document.getElementById('svg-upload');
  const zoomInBtn = document.getElementById('zoom-in');
  const zoomOutBtn = document.getElementById('zoom-out');
  const panUpBtn = document.getElementById('pan-up');
  const panDownBtn = document.getElementById('pan-down');
  const panLeftBtn = document.getElementById('pan-left');
  const panRightBtn = document.getElementById('pan-right');
  const resetBtn = document.getElementById('reset-view');
  const copyBtn = document.getElementById('copy-svg');
  
  const placeholder = document.getElementById('placeholder');
  const svgViewer = document.getElementById('svg-viewer');
  const svgContent = document.getElementById('svg-content');
  const zoomLevelDisplay = document.getElementById('zoom-level');

  // State variables
  let scale = 1;
  let position = { x: 0, y: 0 };
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  const PAN_STEP = 60;

  // Initialize with empty view
  function updateUI(content) {
    if (!content || !content.trim()) {
      placeholder.style.display = 'flex';
      svgViewer.style.display = 'none';
      return;
    }

    svgContent.innerHTML = content;
    placeholder.style.display = 'none';
    svgViewer.style.display = 'block';
    
    // Ensure the SVG within svgContent behaves well
    const svgElement = svgContent.querySelector('svg');
    if (svgElement) {
      // If it doesn't have a viewBox but has width/height, we might want to fix it
      // but for now let's just let it be.
    }

    resetView();
  }

  // Raw text input handler
  svgInput.addEventListener('input', function() {
    updateUI(this.value);
  });

  // File upload handler
  fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target.result;
      svgInput.value = content;
      updateUI(content);
    };
    reader.readAsText(file);
  });

  // Zoom functions
  function zoomIn() {
    scale = Math.min(scale * 1.2, 20);
    updateTransform();
  }

  function zoomOut() {
    scale = Math.max(scale / 1.2, 0.05);
    updateTransform();
  }

  function updateZoomDisplay() {
    zoomLevelDisplay.textContent = `${Math.round(scale * 100)}%`;
  }

  function updateTransform() {
    svgContent.style.transform = `translate(${position.x}px, ${position.y}px) scale(${scale})`;
    updateZoomDisplay();
  }

  zoomInBtn.addEventListener('click', zoomIn);
  zoomOutBtn.addEventListener('click', zoomOut);

  // Pan functions
  function panUp() { position.y += PAN_STEP; updateTransform(); }
  function panDown() { position.y -= PAN_STEP; updateTransform(); }
  function panLeft() { position.x += PAN_STEP; updateTransform(); }
  function panRight() { position.x -= PAN_STEP; updateTransform(); }

  panUpBtn.addEventListener('click', panUp);
  panDownBtn.addEventListener('click', panDown);
  panLeftBtn.addEventListener('click', panLeft);
  panRightBtn.addEventListener('click', panRight);

  function resetView() {
    scale = 1;
    // Center the content initially
    position = { x: 0, y: 0 };
    
    // Attempt to center relative to viewer-container
    const container = document.getElementById('viewer-container');
    const content = svgContent;
    
    // Small delay to allow browser to calculate sizes if needed
    setTimeout(() => {
      const rect = content.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // We start at 0,0. The transform-origin is center center (in CSS).
      // Actually, transform-origin center center on an absolute element 
      // with no defined width/height can be tricky.
      // Let's stick to simple 0,0 for now and user can pan.
      updateTransform();
    }, 0);
  }

  resetBtn.addEventListener('click', resetView);

  // Copy to clipboard
  copyBtn.addEventListener('click', function() {
    const content = svgInput.value;
    if (!content) return;
    
    navigator.clipboard.writeText(content).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('button-primary');
      copyBtn.classList.remove('button-secondary');
      
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.remove('button-primary');
        copyBtn.classList.add('button-secondary');
      }, 2000);
    });
  });

  // Drag handlers
  svgViewer.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return; // Only left mouse button
    isDragging = true;
    dragStart = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    position = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    };
    updateTransform();
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });

  // Wheel zoom
  svgViewer.addEventListener('wheel', function (e) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    
    // Zoom towards mouse position would be better, but simple zoom for now
    scale = Math.max(0.05, Math.min(20, scale * delta));
    updateTransform();
  }, { passive: false });

  // Keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    if (document.activeElement === svgInput) return;

    switch (e.key) {
      case '+':
      case '=':
        zoomIn();
        break;
      case '-':
        zoomOut();
        break;
      case 'ArrowUp':
        panUp();
        e.preventDefault();
        break;
      case 'ArrowDown':
        panDown();
        e.preventDefault();
        break;
      case 'ArrowLeft':
        panLeft();
        e.preventDefault();
        break;
      case 'ArrowRight':
        panRight();
        e.preventDefault();
        break;
      case 'r':
      case 'R':
        resetView();
        break;
    }
  });

  // Initialize
  updateZoomDisplay();
});
