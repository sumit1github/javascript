<script>
  const myDict = {'367': 20, '456': 30};
  const operation = "{367}/{456}+5*{367}"; // example operation with curly braces
  const regex = /{([^{}]+)}/g; // regex pattern to match curly braces and capture the key inside

  const result = operation.replace(regex, (match, key) => myDict[key]); // replace curly braces with corresponding values

  console.log(result); // output: "20/30+5*20"
  console.log(eval(result))
</script>
