const theaterLayout = [
    [
      { rows: 4, columns: 4 },
      { rows: 4, columns: 10 },
      { rows: 4, columns: 4 }
    ],
    [
      { rows: 4, columns: 4 },
      { rows: 4, columns: 10 },
      { rows: 4, columns: 4 }
    ],
    [
      { rows: 7, columns: 4 },
      { rows: 7, columns: 10 },
      { rows: 7, columns: 4 }
    ]
  ];
  
  function generateSeatSelector() {
    const mainContainer = document.getElementById('main-container');
  
    theaterLayout.forEach((section, sectionIndex) => {
      const theaterDiv = document.createElement('div');
      theaterDiv.classList.add('theater-div');
  
      section.forEach((subsection, subIndex) => {
        const subsectionDiv = document.createElement('div');
        subsectionDiv.classList.add('subsection-div');
  
        for (let i = 0; i < subsection.rows; i++) {
          const seatRow = document.createElement('div');
          seatRow.classList.add('seat-row');
  
          for (let j = 0; j < subsection.columns; j++) {
            const seat = document.createElement('div');
            seat.classList.add('seat', 'available');
            seat.addEventListener('click', toggleSeatStatus);
            seatRow.appendChild(seat);
          }
  
          subsectionDiv.appendChild(seatRow);
        }
  
        theaterDiv.appendChild(subsectionDiv);
      });
  
      mainContainer.appendChild(theaterDiv);
    });
  }
  
  function toggleSeatStatus(event) {
    const seat = event.target;
    if (seat.classList.contains('available')) {
      seat.classList.remove('available');
      seat.classList.add('selected');
    } else if (seat.classList.contains('selected')) {
      seat.classList.remove('selected');
      seat.classList.add('booked');
    } else if (seat.classList.contains('booked')) {
        seat.classList.remove('booked');
        seat.classList.add('available');
    }
  }
  
  window.addEventListener('load', generateSeatSelector);
  