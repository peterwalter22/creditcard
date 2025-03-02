document.addEventListener('DOMContentLoaded', () => {
  let participantCount = 1;

  function participantTemplate(count) {
    return `<section class="participant${count}" id="participant${count}">
                  <label for="name${count}">Name:</label>
                  <input type="text" id="name${count}" name="name${count}" required>

                  <label for="fee${count}">Fee:</label>
                  <input type="number" id="fee${count}" name="fee${count}" required>
              </section>`;
  }

  document.querySelector('.add-participant').addEventListener('click', () => {
    participantCount++;
    const newParticipant = participantTemplate(participantCount);
    document.querySelector('.participants').insertAdjacentHTML('beforeend', newParticipant);
  });

  document.querySelector('.form').addEventListener('submit', submitForm);
});

function submitForm(event) {
  event.preventDefault();
  const adultName = document.querySelector('#name1').value;
  const totalFees = totalFees();
  const info = {
    name: adultName,
    numParticipants: participantCount,
    totalFees: totalFees
  };

  document.querySelector('.form').style.display = 'none';
  document.querySelector('.summary').innerHTML = successTemplate(info);
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((total, feeElement) => total + parseFloat(feeElement.value || 0), 0);
}

function successTemplate(info) {
  return `Thank you ${info.name} for registering. You have registered ${info.numParticipants} participants and owe $${info.totalFees}.`;
}
