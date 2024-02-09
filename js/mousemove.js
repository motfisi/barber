document.addEventListener("DOMContentLoaded", function() {
    const mouse = document.getElementById("mouse");
  
    document.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      const rect = mouse.getBoundingClientRect();
      const objX = rect.left + rect.width / 2;
      const objY = rect.top + rect.height / 2;
  
      const deltaX = mouseX - objX;
      const deltaY = mouseY - objY;
  
      mouse.style.transform = `translate(${deltaX / 20}px, ${deltaY / 20}px)`;
    });
  });
  