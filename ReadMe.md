Simple Ticker
============
A simple script to flash a list of text sequentially.

##Usage:
```javascript
$('ul#mylist li').tick({
  element : $('h2.ticker'), //required
  fadein : 1000, //optional
  fadeout : 1000, //optional
  stay: 2000, //optional
});
```

The
```javascript
  element // element in which the ticker is displayed 
```
option is necessary. By default, the code searches for

```javascript
  element : $('.ticker'),
```
