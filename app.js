const fake = document.getElementById('fake');
const action = document.getElementById('action');
const noun = document.getElementById('noun');
const nameResult = document.getElementById('nameResult');
const actionResult = document.getElementById('actionResult');
const nounResult = document.getElementById('nounResult');
const result = document.getElementById('result');

function input() {
  event.preventDefault();
  nameResult.textContent = fake.value;
  actionResult.textContent = action.value;
  nounResult.textContent = noun.value;
  result.style.display = "block";
}
