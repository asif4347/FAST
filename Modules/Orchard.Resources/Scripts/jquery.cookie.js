/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5jb29raWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianF1ZXJ5LmNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogalF1ZXJ5IENvb2tpZSBQbHVnaW4gdjEuNC4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2FyaGFydGwvanF1ZXJ5LWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE0IEtsYXVzIEhhcnRsXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTUQgKFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUpXG5cdFx0ZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdC8vIE5vZGUvQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoalF1ZXJ5KTtcblx0fVxufShmdW5jdGlvbiAoJCkge1xuXG5cdHZhciBwbHVzZXMgPSAvXFwrL2c7XG5cblx0ZnVuY3Rpb24gZW5jb2RlKHMpIHtcblx0XHRyZXR1cm4gY29uZmlnLnJhdyA/IHMgOiBlbmNvZGVVUklDb21wb25lbnQocyk7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWNvZGUocykge1xuXHRcdHJldHVybiBjb25maWcucmF3ID8gcyA6IGRlY29kZVVSSUNvbXBvbmVudChzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHN0cmluZ2lmeUNvb2tpZVZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIGVuY29kZShjb25maWcuanNvbiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IFN0cmluZyh2YWx1ZSkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFyc2VDb29raWVWYWx1ZShzKSB7XG5cdFx0aWYgKHMuaW5kZXhPZignXCInKSA9PT0gMCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIHF1b3RlZCBjb29raWUgYXMgYWNjb3JkaW5nIHRvIFJGQzIwNjgsIHVuZXNjYXBlLi4uXG5cdFx0XHRzID0gcy5zbGljZSgxLCAtMSkucmVwbGFjZSgvXFxcXFwiL2csICdcIicpLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJyk7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdC8vIFJlcGxhY2Ugc2VydmVyLXNpZGUgd3JpdHRlbiBwbHVzZXMgd2l0aCBzcGFjZXMuXG5cdFx0XHQvLyBJZiB3ZSBjYW4ndCBkZWNvZGUgdGhlIGNvb2tpZSwgaWdub3JlIGl0LCBpdCdzIHVudXNhYmxlLlxuXHRcdFx0Ly8gSWYgd2UgY2FuJ3QgcGFyc2UgdGhlIGNvb2tpZSwgaWdub3JlIGl0LCBpdCdzIHVudXNhYmxlLlxuXHRcdFx0cyA9IGRlY29kZVVSSUNvbXBvbmVudChzLnJlcGxhY2UocGx1c2VzLCAnICcpKTtcblx0XHRcdHJldHVybiBjb25maWcuanNvbiA/IEpTT04ucGFyc2UocykgOiBzO1xuXHRcdH0gY2F0Y2goZSkge31cblx0fVxuXG5cdGZ1bmN0aW9uIHJlYWQocywgY29udmVydGVyKSB7XG5cdFx0dmFyIHZhbHVlID0gY29uZmlnLnJhdyA/IHMgOiBwYXJzZUNvb2tpZVZhbHVlKHMpO1xuXHRcdHJldHVybiAkLmlzRnVuY3Rpb24oY29udmVydGVyKSA/IGNvbnZlcnRlcih2YWx1ZSkgOiB2YWx1ZTtcblx0fVxuXG5cdHZhciBjb25maWcgPSAkLmNvb2tpZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zKSB7XG5cblx0XHQvLyBXcml0ZVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmICEkLmlzRnVuY3Rpb24odmFsdWUpKSB7XG5cdFx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIGNvbmZpZy5kZWZhdWx0cywgb3B0aW9ucyk7XG5cblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHR2YXIgZGF5cyA9IG9wdGlvbnMuZXhwaXJlcywgdCA9IG9wdGlvbnMuZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdHQuc2V0TWlsbGlzZWNvbmRzKHQuZ2V0TWlsbGlzZWNvbmRzKCkgKyBkYXlzICogODY0ZSs1KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBbXG5cdFx0XHRcdGVuY29kZShrZXkpLCAnPScsIHN0cmluZ2lmeUNvb2tpZVZhbHVlKHZhbHVlKSxcblx0XHRcdFx0b3B0aW9ucy5leHBpcmVzID8gJzsgZXhwaXJlcz0nICsgb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJywgLy8gdXNlIGV4cGlyZXMgYXR0cmlidXRlLCBtYXgtYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblx0XHRcdFx0b3B0aW9ucy5wYXRoICAgID8gJzsgcGF0aD0nICsgb3B0aW9ucy5wYXRoIDogJycsXG5cdFx0XHRcdG9wdGlvbnMuZG9tYWluICA/ICc7IGRvbWFpbj0nICsgb3B0aW9ucy5kb21haW4gOiAnJyxcblx0XHRcdFx0b3B0aW9ucy5zZWN1cmUgID8gJzsgc2VjdXJlJyA6ICcnXG5cdFx0XHRdLmpvaW4oJycpKTtcblx0XHR9XG5cblx0XHQvLyBSZWFkXG5cblx0XHR2YXIgcmVzdWx0ID0ga2V5ID8gdW5kZWZpbmVkIDoge30sXG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cblx0XHRcdC8vIGNhbGxpbmcgJC5jb29raWUoKS5cblx0XHRcdGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bCA9IGNvb2tpZXMubGVuZ3RoO1xuXG5cdFx0Zm9yICg7IGkgPCBsOyBpKyspIHtcblx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKSxcblx0XHRcdFx0bmFtZSA9IGRlY29kZShwYXJ0cy5zaGlmdCgpKSxcblx0XHRcdFx0Y29va2llID0gcGFydHMuam9pbignPScpO1xuXG5cdFx0XHRpZiAoa2V5ID09PSBuYW1lKSB7XG5cdFx0XHRcdC8vIElmIHNlY29uZCBhcmd1bWVudCAodmFsdWUpIGlzIGEgZnVuY3Rpb24gaXQncyBhIGNvbnZlcnRlci4uLlxuXHRcdFx0XHRyZXN1bHQgPSByZWFkKGNvb2tpZSwgdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Ly8gUHJldmVudCBzdG9yaW5nIGEgY29va2llIHRoYXQgd2UgY291bGRuJ3QgZGVjb2RlLlxuXHRcdFx0aWYgKCFrZXkgJiYgKGNvb2tpZSA9IHJlYWQoY29va2llKSkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBjb29raWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRjb25maWcuZGVmYXVsdHMgPSB7fTtcblxuXHQkLnJlbW92ZUNvb2tpZSA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcblx0XHQvLyBNdXN0IG5vdCBhbHRlciBvcHRpb25zLCB0aHVzIGV4dGVuZGluZyBhIGZyZXNoIG9iamVjdC4uLlxuXHRcdCQuY29va2llKGtleSwgJycsICQuZXh0ZW5kKHt9LCBvcHRpb25zLCB7IGV4cGlyZXM6IC0xIH0pKTtcblx0XHRyZXR1cm4gISQuY29va2llKGtleSk7XG5cdH07XG5cbn0pKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
