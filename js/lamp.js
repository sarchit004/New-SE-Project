function changeProfile(profileName) {
    var profileImage = document.getElementById('profileImage');
    switch (profileName) {
      case 'jessica':
        profileImage.src = '../images/jessica.png';
        break;
      case 'mom':
        profileImage.src = '../images/mom.png';
        break;
      case 'dad':
        profileImage.src = '../images/dad.png';
        break;
      case 'son':
        profileImage.src = '../images/son.png';
        break;
      case 'daughter':
        profileImage.src = '../images/daughter.png';
        break;
      default:
        profileImage.src = '../images/default.png';
        break;
    }
  }

// for pop-up
function toggleMenuSettings() {
    var subMenuSettings = document.getElementById('subMenu-settings');
    subMenuSettings.classList.toggle("open-menu");
}

function toggleMenuNotification() {
    var subMenuNotification = document.getElementById('subMenu-notification');
    subMenuNotification.classList.toggle("open-menu");
}

// closing window with clicking away 
document.addEventListener('click', function(event) {
    var subMenuSettings = document.getElementById('subMenu-settings');
    var subMenuNotification = document.getElementById('subMenu-notification');
    var isClickInsideSettings = document.getElementById('settings-button').contains(event.target);
    var isClickInsideNotification = document.getElementById('notification-icon').contains(event.target);

    if (!isClickInsideSettings && !isClickInsideNotification) {
        subMenuSettings.classList.remove('open-menu');
        subMenuNotification.classList.remove('open-menu');
    }
});


// for toggle button 
document.addEventListener("DOMContentLoaded", function() {
  // Set initial state of main switch to on
  const mainSwitch = document.querySelector('.custom-switch-fridge');
  mainSwitch.checked = true;
  
  // Initialize main switch status text
  const mainSwitchStatus = document.querySelector('.main-switch-status');
  mainSwitchStatus.textContent = 'On';

  // Initialize all the light status elements based on the main switch state
  const lightStatuses = document.querySelectorAll('.light-status');
  lightStatuses.forEach(function(lightStatus) {
      lightStatus.textContent = 'On';
  });

  // Initialize all the unique switches based on the main switch state
  const uniqueSwitches = document.querySelectorAll('.unique-switch input');
  uniqueSwitches.forEach(function(uniqueSwitch) {
      uniqueSwitch.checked = true;
  });

  // Get the main control element
  const mainControl = document.querySelector('.main-control');

  // Add event listener for change event on the main control element
  mainControl.addEventListener('change', function(event) {
      // Check if the target of the event is the main switch toggle input
      if (event.target.matches('.custom-switch-fridge')) {
          const isOn = event.target.checked;
          // Update main switch state and synchronize lights
          updateMainSwitchState(isOn);
      }
  });

  // Add event listener for change event on each unique switch
  uniqueSwitches.forEach(function(uniqueSwitch) {
      uniqueSwitch.addEventListener('change', function(event) {
          // Get the light status element next to the unique switch
          const lightStatus = event.target.closest('.all-room').querySelector('.light-status');
          // Update light status based on unique switch state
          lightStatus.textContent = event.target.checked ? 'On' : 'Off';
      });
  });

  // Function to update main switch state and synchronize lights
  function updateMainSwitchState(isOn) {
      // Update main switch status text
      const mainSwitchStatus = document.querySelector('.main-switch-status');
      mainSwitchStatus.textContent = isOn ? 'On' : 'Off';

      // Update all the light status elements based on the main switch state
      const lightStatuses = document.querySelectorAll('.light-status');
      lightStatuses.forEach(function(lightStatus) {
          lightStatus.textContent = isOn ? 'On' : 'Off';
      });

      // Update all the unique switches based on the main switch state
      uniqueSwitches.forEach(function(uniqueSwitch) {
          uniqueSwitch.checked = isOn;
      });
  }
});

