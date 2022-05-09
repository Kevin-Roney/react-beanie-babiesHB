# React Beanie Babies List/Detail App

Here's the credential info for my `beanie_babies` table in supabase:

```
REACT_APP_SUPABASE_URL=https://gxwgjhfyrlwiqakdeamc.supabase.co
REACT_APP_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA
```

**Visit the live demo here:** [Live Demo](https://ecstatic-jackson-7ce76f.netlify.app/)

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On the home page load, fetch and display a list of the first 20 or so beanie babies from supabase without errors.  |        1 |
| On next page click, fetch and display a list of the next 20 beanie babies. This button should be disabled on page 1.  |        1 |
| On prev page click, fetch and display a list of the previous 20 beanie babies.  |        1 |
| When the user clicks on a beanie baby, navigate to that beanie baby's detail page |        1 |
| On detail page load, fetch and display the correct beanie baby based on the id in the URL |        1 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : has routes to the `BeaniesPage` and `BeanieDetail` components, with appropriate `exact path` props |1|
| `BeanieBaby({ beanieBaby })` : takes in the correct props and renders `Link` components to the detail page in addition to making it look nice |1|
| `BeaniesList({ beanieBabies })` : takes in the correct props and renders a `BeanieBaby` for each item in the array |1|
| `BeaniesPage` : tracks beanieBabies and page state correctly, refetching whenever the page state changes, passes props correctly to `BeaniesList` |1|
| `BeanieDetail` : uses the correct `react-router-dom` hook to get the id from the URL, then uses that id to fetch the correct beanie baby. Render it nicely :) |1|

![image](https://user-images.githubusercontent.com/16160135/150245762-448edede-a9af-494a-b8fe-c26e855e61d4.png)


### Stretch goal ideas
- Add a search bar. Initially, just launch a new search on change using your `useEffect`. Ideally, though, this search should occur on submit. Ooooor you can look into throttling/debouncing your function call to limit the number of calls that are made on change!
- Add search params to the URL on change. That way you can copy and paste link to the exact right search and send it to somebody else. You'll need to use the query params to set the initial state of your current page and search query
