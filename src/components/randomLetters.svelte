<script>
    import { onMount } from 'svelte';
  
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let interval = null;
    let text = '';
  
    onMount(() => {
      let iteration = 0;
      const targetText = 'Jarod Schupp';
  
      interval = setInterval(() => {
        text = targetText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
  
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');
  
        if (iteration >= targetText.length) {
          clearInterval(interval);
        }
  
        iteration += 1 / 3;
      }, 30);
    });
  </script>
  
  <h1>{text}</h1>
  