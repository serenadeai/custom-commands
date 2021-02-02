serenade
  .language("python")
  .snippet(
    "add route <%identifier%>",
    '@app.route("/<%identifier%>")<%newline%>def <%identifier%><%cursor%>():<%newline%><%indent%>pass',
    {},
    "function"
  );

serenade.language("python").snippet("add import flask", "from flask import Flask");
