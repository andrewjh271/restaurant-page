# Restaurant Page

A simple restaurant website based on [Monzú](https://monzufreshpasta.com/) in San Diego, created as part of the Odin Project [curriculum](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/restaurant-page). View [live page](https://andrewjh271.github.io/restaurant-page/).

###### Thoughts

The purpose of this project was to work with modules and Webpack. Importing and Exporting modules was pretty straightforward, except that there seems to be many options in terms of syntax and it was a bit challenging to figure out what is best practice (not sure if I succeeded in this regard). Webpack was pretty easy to work with as well. Some extra steps I encountered were adding `mode: 'development'` in the `webpack.config.js` file to get rid of an error message in the console, and adding `devtool: 'source-map'` in order to view in the console the JavaScript files as they were originally written.

There is a global variable that Javascript automatically creates named after an element's `id`, as explained [here](https://javascript.info/searching-elements-dom). This caused some very confusing behavior until I realized what was going on.

To replace the content in the DOM for each tab click, I used `Node.removeChild()` and  `Node.replaceChild()` before finally settling on `ChildNode.replaceWith()`. I also used `Node.firstChild`, which was at first confusing because it was returning the extra white space created in the HTML file between `div` opening and closing tags.

In order not to duplicate code for each tab I used the following strategy in `index.js`:

```javascript
const tabDisplays = { home, about, menu, contact };
tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		...
		content.firstChild.replaceWith(tabDisplays[tab.dataset.tab]());
	});
});
```

By making `tabDisplays` an object holding the functions I wanted, I could call each function dynamically. I am not sure if this is the best approach, but it does seem better than what I had before.