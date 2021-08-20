// Examples:
//   getRandomMood() => '😂'
//   getRandomMood() => '🥴'
function getRandomMood() {
    const moods = ['🙂', '😍', '😂', '😢', '😡', '🥴', 
                   '🥳', '🥶', '😴', '🥵'];
    const randomIndex = Math.floor(Math.random() * moods.length);
    return moods[randomIndex];
  }

  const myButton = document.getElementById('my-Button');
  const myMood = document.getElementById('my-Mood');

  myButton.addEventListener('click', () => {myMood.innerHTML = getRandomMood();
  });

  function getRandomThings() {
    const things = ['Pizza', 'Coffee', 'Sleep', 'Go to the beach', 
                    'Watch a movie', 'Lay down', 'Listening to music',
                    'Karoke', 'Roadtrip', 'Date night'];
    const randomIndex2 = Math.floor(Math.random() * things.length);
    return things[randomIndex2];
  }
  
  const myButton2 = document.getElementById('my-Button2');
  const myFeel = document.getElementById('my-Feel');

  myButton2.addEventListener('click', () => {myFeel.innerHTML = getRandomThings();
  });