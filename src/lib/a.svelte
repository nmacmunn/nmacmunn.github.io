<script lang="ts">
  export let type: "" | "success" | "warning" | "danger" = "";
  export let href: string;
  export let label: string;

  let target = "_self";
  try {
    new URL(href);
    target = "_blank";
  } catch {
    //
  }
</script>

<a class={type} {href} {target} rel="noreferrer">{label}</a>

<style>
  a {
    color: var(--primary);
    text-decoration: none;
    position: relative;
    background-repeat: repeat-x;
    background-size: 1px 2px;
    background-position: bottom;

    /* prevent overflow */
    white-space: nowrap;
  }

  a {
    background-image: linear-gradient(
      90deg,
      var(--secondary-text),
      var(--secondary-text)
    );
  }

  a:visited {
    text-decoration: none;
  }

  a.success {
    background-image: linear-gradient(
      90deg,
      var(--success-text),
      var(--success-text)
    );
  }

  a.warning {
    background-image: linear-gradient(
      90deg,
      var(--warning-text),
      var(--warning-text)
    );
  }

  a.danger {
    background-image: linear-gradient(
      90deg,
      var(--danger-text),
      var(--danger-text)
    );
  }

  a:before {
    content: "";
    position: absolute;
    top: 0.5em;
    bottom: 0;
    left: 4px;
    right: -4px;
    z-index: -1;
  }

  a:before {
    background-color: var(--secondary-light);
  }

  a.success::before {
    background-color: var(--success-light);
  }

  a.warning::before {
    background-color: var(--warning-light);
  }

  a.danger::before {
    background-color: var(--danger-light);
  }
</style>
