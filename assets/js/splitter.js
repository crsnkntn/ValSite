document.querySelectorAll('.post .tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.post .tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        // Code to display the corresponding content goes here

        // Determine which content to show based on the clicked tab
        let contentToShow = (this.id === 'pictures-tab') ? 'pic-view' : 'pdf-view';
        let contentToHide = (this.id === 'pictures-tab') ? 'pdf-view' : 'pic-view';
        
        console.log("showing: ", contentToShow);
        console.log("hiding: ", contentToHide);

        // Hide the other view and show the correct one
        document.getElementById(contentToHide).classList.remove('active');
        document.getElementById(contentToShow).classList.add('active');
    });
});