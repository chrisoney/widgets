const fetch = require('node-fetch');

(async () => {
  const res = await fetch(
    `https://instructor-dashboard.herokuapp.com/?page=${2}`,
    {
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVWTVORFEwTURjM1FVSkNNalZDUmtVMU5EWkNNak5HTXpOQk1FSXhPVGhCTjBGQlFqZEJNQSJ9.eyJodHRwczovL2FwcGFjYWRlbXkuaW8vZW1haWwiOiJjb25leUBhcHBhY2FkZW15LmlvIiwiaHR0cHM6Ly9hcHBhY2FkZW15LmlvL3JvbGVzIjpbXSwiaXNzIjoiaHR0cHM6Ly9hcHBhY2FkZW15LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNDQyOTk4NTk1MzQ2NjgzOTg1NiIsImF1ZCI6WyJodHRwczovL2FwaS5hcHBhY2FkZW15LmlvIiwiaHR0cHM6Ly9hcHBhY2FkZW15LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2MTUzOTExMjMsImV4cCI6MTYxNTQ3NzUyMywiYXpwIjoiM3MxRDRMc2ZoNk1kcDk0cXVTZEdqOFFrZTNQWFpoYUoiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOltdfQ.YQzyJSn7Zc5kX7s7QyUeyGYXRtzkhNZESiJ2XYFwErNCqug3pzZxG75T6l7FwwWZgNqzreBRNcAeuVPHxFKJVQ1JLr3jrAJHTiZUgxiPGXXMiVlCJwTCLMeP_eI-lSpjIpLCAPUGIUCa1bOBJN-gaTcDlzK_BwY-lSYACKG73CJ8kZAQZDHkmbHH_jIXRzTj8kk0Ti5dr3lhO83hH5Ru_k2gBcCnpel0Z0LzVDYQFP3AVlyzLRcI0BXByntMKBWXH4AMrX2gh-mlKN02CHbWPYVnuQnl6pmdPslRjowRt-mUxmw9vmZWHHKGihUJKJ4qT5wcH-NdLTc47gy6oX06qQ',
    }
  );
  console.log(res.body);
})();
