serenade
  .language("python")
  .snippet(
    "add model <%identifier%>",
    "class <%identifier%>(models.Model):<%newline%><%indent%>pass",
    { identifier: ["pascal"] },
    "class"
  );

serenade
  .language("python")
  .snippet(
    "add form <%identifier%>",
    "class <%identifier%>(forms.Form):<%newline%><%indent%>pass",
    { identifier: ["pascal"] },
    "class"
  );

serenade
  .language("python")
  .snippet(
    "add admin <%identifier%>",
    "class <%identifier%>(admin.ModelAdmin):<%newline%><%indent%>pass",
    { identifier: ["pascal"] },
    "class"
  );

serenade.language("python").snippet("add login required", "@login_required", {}, "decorator");
