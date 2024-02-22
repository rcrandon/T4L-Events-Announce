// JavaScript to generate the dynamic calendar
// Script that populates the agenda dynamically from a predefined list of events. This approach allows for easy updates and modifications to the event schedule without altering the HTML structure.
document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            time: '11:06 - 11:40',
            title: 'Black Genes Matter - Real Talk About Cancer',
            speakers: 'Angela Brade, Kemith Calvin, Laura Crandon, Moniesha Jackson Shorter',
            description: 'Is there a genetic link to health conditions? Panelists share personal stories about their health journeys. Learn about the state of Black health and be inspired to take action to eliminate the generational impact of cancer.'
        },
        {
            time: '11:40 - 12:10',
            title: 'When We Trial and For the Love of My Gurls',
            speakers: 'Ricki Fairley, Hayley Brown',
            description: 'Discuss myths and facts about clinical trials. Learn why the lack of diversity in clinical trials impacts our quality of life and how we can change that.'
        },
        // Add remaining events following the pattern above
    ];

    generateAgenda(events);
});

function generateAgenda(events) {
    const agendaContainer = document.querySelector('.agenda-container');
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('agenda-item');
        eventItem.innerHTML = `
            <time>${event.time}</time>
            <h3>${event.title}</h3>
            <p>Speakers: ${event.speakers}</p>
            <p>${event.description}</p>
        `;
        agendaContainer.appendChild(eventItem);
    });
}

// JavaScript for modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Event listener for the agenda summary toggle
document.getElementById('toggleAgendaSummary').addEventListener('click', function() {
    var agendaSummary = document.getElementById('agendaSummary');
    if (agendaSummary.style.display === 'none') {
        agendaSummary.style.display = 'block';
        this.textContent = 'Hide Agenda Summary';
    } else {
        agendaSummary.style.display = 'none';
        this.textContent = 'Show Agenda Summary';
    }
});
// Add event listeners for all speaker modals
document.querySelectorAll('.speaker').forEach(speaker => {
    speaker.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal-id');
        openModal(modalId);
    });
});

// Add event listeners for all close buttons in modals
document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal.id);
    });
});
