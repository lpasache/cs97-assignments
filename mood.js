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
    const things = ['Eat pizza', 'Get coffee', 'Sleep', 'Go to the beach', 
                    'Watch a movie', 'Lay down', 'Listen to music',
                    'Go karoke', 'Go on a roadtrip', 'Date night'];
    const randomIndex2 = Math.floor(Math.random() * things.length);
    return things[randomIndex2];
  }
  
  const myButton2 = document.getElementById('my-Button2');
  const myFeel = document.getElementById('my-Feel');

  myButton2.addEventListener('click', () => {myFeel.innerHTML = getRandomThings();
  });