<script lang="ts">
  let formEl: HTMLFormElement;
  let name: string;
  let description: string;
  let budget: string;
  let timeframe: string;
  let email: string;

  function onSubmit() {
    const n = "neil";
    const m = "macmunn";
    const b = encodeURIComponent(`Hi Neil,

  My name is ${name} and I'm looking for help with ${description}.

  I have a budget of $${budget} and a timeframe of ${timeframe} weeks.

  You can email me at ${email}.
  `);
    const url = `mailto:${n}@${m}.com?subject=Hello&body=${b}`;
    window.open(url, "_blank");
    formEl.reset();
  }
</script>

<form class="paper" bind:this={formEl} on:submit|preventDefault={onSubmit}>
  <p>Hey Neil,</p>
  <p>
    My name is
    <label>
      <input type="text" size="8" bind:value={name} required />
    </label>
    and I'm looking for help with
    <label>
      <input type="text" size="20" bind:value={description} required />
    </label>.
  </p>
  <p>
    I have a budget of $<label>
      <input type="text" size="5" bind:value={budget} required />
    </label>
    and a timeframe of
    <label>
      <input type="text" size="2" bind:value={timeframe} required />
    </label>
    weeks.
  </p>
  <p>
    You can email me at
    <label>
      <input type="email" bind:value={email} required />
    </label>.
  </p>
  <br />
  <button type="submit">Say Hello</button>
</form>
