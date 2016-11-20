# searchPersonWithEmail

It is a single-page, React-based, Javscript application that uses the FullContact API to lookup information about people based on their email address.

I have used the v2 Person API (https://www.fullcontact.com/developer/docs/person/).

Form has a single text entry field (for email address) and a submit button. The AJAX response from the FullContact API will be rendered on the page (if available).
The rendered info includes:
- First available photo
- Full name
- General location
- Links to all given social profiles

The status field in the JSON response body will tell you whether the API could find something or not. If the status is NOT 200, then it displays a simple Javascript alert with the value of the message field as the text. Similarly, HTTP errors from the AJAX call shows an alert to the user letting them know something went wrong.
The results gets cleared when a new request occurs (so the user can do multiple requests in a row).

I have used a CSS framework (Bootstrap) for appearance and ES6 for the functionality.
