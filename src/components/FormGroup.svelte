<style lang="scss">
  $lightColor: #bdc3c7;
  $errorColor: rgba(231, 77, 60, .4);
  $errorColorHover: rgba(231, 77, 60, .5);
  $mainColor: rgba(46, 204, 113, 0.4);
  $mainColorHover: rgba(46, 204, 113, 0.5);

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-input {
    padding: 0.5em;
    width: 100% !important;
    min-height: 8em;
    box-sizing: border-box;
  }

  .file-upload {
    cursor: pointer;
    background-color: $mainColor;
    padding: 1em;
    color: black;
    transition: .1s;
    box-sizing: border-box;
    box-shadow: 0 2px 4px 0px rgba(127, 140, 141, .6);
    word-break: break-word;

    &:hover {
      background-color: $mainColorHover;
    }

    &.error {
      background-color: $errorColor;

      &:hover {
        background-color: $errorColorHover;
      }
    }
  }

  .uploaded-filename {
    font-weight: bold;
  }

  .input-separator {
    margin: 1em;
    color: $lightColor;
    position: relative;
    align-self: center;
    font-style: italic;

    &::before {
      content: "";
      position: absolute;
      width: 20%;
      height: 1px;
      background-color: $lightColor;
      left: 0;
      top: 50%;
      transform: translate(-130%, -50%);
    }

    &::after {
      content: "";
      position: absolute;
      width: 20%;
      height: 1px;
      background-color: $lightColor;
      right: 0;
      top: 50%;
      transform: translate(130%, -50%);
    }
  }
</style>

<script>
  export let value = "";
  export let selected = "";
  export let labelText = "";
  export let id = "";
  export let placeholder = "";
  let uploadedFilename = "";
  let errors = [];

  const acceptedSubmitKeyboardKeys = [
    "Enter",
    "Space",
    13, // enter
    32, // space
  ];

  // Must be a comma separated string after joining
  const acceptedFileTypes = [
    "text/plain",
  ];
  const acceptedExtensions = [
    ".txt",
    ".TXT",
  ];
  const acceptAttribute = acceptedExtensions.join();

  const readFiles = (files) => {
    return Promise.all(files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => resolve("");
        reader.readAsText(file);
      });
    }));
  }

  const handleFilesBeforeReading = (event) => {
    errors = [];
    const files = event.target.files;
    if (!files.length) {
      return;
    }

    // Supports multiple file upload
    const filesList = [];
    for (let i = 0; i < files.length; i++) {
      if (!acceptedFileTypes.includes(files[i].type)) {
        errors.push("Uploaded file is not of valid extension! Please upload a different file.");
        break;
      }

      filesList.push(files[i]);
    }

    if (errors.length) {
      return;
    }

    readFiles(filesList).then((data) => {
      uploadedFilename = filesList[0].name;
      value = data[0];
    })
  }

  const clickUsingKeyboard = (e) => {
    // Event.keyCode is used until IE and EDGE has implemented Event.code
    if (acceptedSubmitKeyboardKeys.includes(e.code || e.keyCode)) {
      e.target.click()
    }
  }

  const resetUpload = () => {
    errors = [];
    uploadedFilename = "";
  }
</script>

<div class="form-group">
  <label
    class={errors.length ? "file-upload error" : "file-upload"}
    for="file-upload"
    tabindex="0"
    on:keydown={clickUsingKeyboard}
  >
    {#if errors.length}
      {#each errors as error}
        <span>{error}</span>
      {/each}
    {:else}
      {#if uploadedFilename}
        <span class="uploaded-filename">{uploadedFilename}</span> was uploaded! ✅
      {:else}
        Click to upload a text document
      {/if}
    {/if}
  </label>
  <input
    type="file"
    id="file-upload"
    name="file-upload"
    style="display: none;"
    on:change={handleFilesBeforeReading}
    accept={acceptAttribute}
  />
  <span class="input-separator">or just type here</span>
  <textarea
    id={id}
    class="form-input"
    type="text"
    bind:value={value}
    placeholder={placeholder}
    aria-placeholder={placeholder}
  />
</div>
