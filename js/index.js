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
  
// show home content by default 
document.addEventListener("DOMContentLoaded", function() {
  // Show the home content section by default
  showContent('home-content');
  

});

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


// for content
function showContent(contentId) {
  // Hide all content sections
  const contentSections = document.querySelectorAll('.content');
  contentSections.forEach(section => {
      section.classList.remove('active');
  });

  // Show the clicked content section
  const selectedContent = document.getElementById(contentId);
  selectedContent.classList.add('active');

  }
// =============================================================================================
document.addEventListener("DOMContentLoaded", function() {
  // Get all toggle buttons in the document
  const toggleButtons = document.querySelectorAll("input[type='checkbox']");

  // Add event listener for change event on each toggle button
  toggleButtons.forEach(function(toggleButton) {
      toggleButton.addEventListener("change", function(event) {
          // Get the closest parent template div
          const templateDiv = event.target.closest(".templates");

          // Get the paragraph with class "temp-current" inside the template div
          const tempCurrent = templateDiv.querySelector(".temp-current");

          // Check if the toggle button is checked (on) or not checked (off)
          if (event.target.checked) {
              // If the toggle button is checked (on), update the text content to 'On'
              tempCurrent.textContent = "On";
          } else {
              // If the toggle button is not checked (off), update the text content to 'Off'
              tempCurrent.textContent = "Off";
          }
      });
  });
});
// for toggle button 
document.addEventListener("DOMContentLoaded", function() {
  // Get all toggle buttons and text elements
  const checkboxes = document.querySelectorAll('.switch input');
  const textElements = document.querySelectorAll('.temp-current-temp, .temp-current-air, .temp-current-lights, .temp-current-thermo');

  // Add event listener for change event on each toggle button
  checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('change', function() {
          // Update the text content of the corresponding text element
          const parentTemplate = this.closest('.temperature-template, .air-conditioner-template, .lights-template, .thermostat');
          const textElement = parentTemplate.querySelector('.temp-current-temp, .temp-current-air, .temp-current-lights, .temp-current-thermo');
          textElement.textContent = this.checked ? 'On' : 'Off';
      });
  });
});

// for water tank 
document.addEventListener("DOMContentLoaded", function() {
  const waterTankSelect = document.getElementById("water-tank");
  const waterTankText = document.querySelector(".water-level-template p:last-child");

  waterTankSelect.addEventListener("change", function() {
      const selectedOption = waterTankSelect.value;
      switch (selectedOption) {
          case "empty":
              waterTankText.textContent = "Water empty";
              break;
          case "half-full":
              waterTankText.textContent = "Water half full";
              break;
          case "full":
              waterTankText.textContent = "Water full";
              break;
          default:
              break;
      }
  });
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


