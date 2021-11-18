serenade.language("javascript").text("spread", "...");

serenade
  .language("javascript")
  .text("insert typeof", "typeof ");

serenade
  .language("javascript")
  .snippet(
    "add arrow function <%identifier%>",
    "const <%identifier%> = () => {\n  <%cursor%>\n}"
  );
  