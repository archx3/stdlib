/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* ESLint rules specific to stdlib.
*
* @namespace rules
*/
var rules = {};

/**
* Require that comments start with an uppercase letter.
*
* @name capitalized-comments
* @memberof rules
* @type {string}
*
* @example
* // Bad...
* function square( x ) {
*     var out;
*
*     // square the number:
*     out = x*x;
*     return out;
* }
*
* @example
* // Good...
* function square( x ) {
*     var out;
*
*     // Square the number:
*     out = x*x;
*     return out;
* }
*/
rules[ 'stdlib/capitalized-comments' ] = [ 'warn', {
	'whitelist': [
		'eslint',
		'eslint-enable',
		'eslint-disable',
		'returns',
		'e.g.,',
		'ndarray',
		'rehype',
		'remark',
		'stdlib',
		'throws'
	]
} ];

/**
* Require an empty line before single-line comments.
*
* @name empty-line-before-comment
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* function square( x ) {
*     var out;
*     // Square the number:
*     out = x*x;
*     return out;
* }
*
* @example
* // Good...
* function square( x ) {
*     var out;
*
*     // Square the number:
*     out = x*x;
*     return out;
* }
*/
rules[ 'stdlib/empty-line-before-comment' ] = 'error';

/**
* Require blockquotes to have `2` character indentation.
*
* @name jsdoc-blockquote-indentation
* @memberof rules
* @type {Array}
* @default [ 'error', 2 ]
* @see [blockquote-indentation]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-blockquote-indentation}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * >   This is a blockquote.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * > This is a blockquote.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-blockquote-indentation' ] = [ 'error', 2 ];

/**
* Prevent checkboxes being followed by too much whitespace.
*
* @name jsdoc-checkbox-content-indent
* @memberof rules
* @type {string}
* @default 'error'
* @see [checkbox-content-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-checkbox-content-indent}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * -   [ ]   Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   [ ] Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-checkbox-content-indent' ] = 'error';

/**
* Require `fenced` code block style.
*
* @name jsdoc-code-block-style
* @memberof rules
* @type {Array}
* @default [ 'error', 'fenced' ]
* @see [code-block-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-code-block-style}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* *     y = x;
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ```javascript
* * y = x;
* * ```
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-code-block-style' ] = [ 'error', 'fenced' ];

/**
* Require lowercased definition labels.
*
* @name jsdoc-definition-case
* @memberof rules
* @type {string}
* @default 'error'
* @see [definition-case]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-definition-case}
*
* @example
* // Bad...
*
* /**
* * Squares a [number][Number].
* *
* * [Number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a [number][number].
* *
* * [number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-definition-case' ] = 'error';

/**
* Prevent consecutive whitespace in a definition.
*
* @name jsdoc-definition-spacing
* @memberof rules
* @type {string}
* @default 'error'
* @see [definition-spacing]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-definition-spacing}
*
* @example
* // Bad...
*
* /**
* * Squares a [number][number   documentation].
* *
* * [number   documentation]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a [number][number documentation].
* *
* * [number documentation]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-definition-spacing' ] = 'error';

/**
* Require `_` be used as the emphasis marker.
*
* @name jsdoc-emphasis-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '_' ]
* @see [emphasis-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-emphasis-marker}
*
* @example
* // Bad...
*
* /**
* * Squares a *number*.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a _number_.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-emphasis-marker' ] = [ 'error', '_' ];

/**
* Require empty lines before `@example` tags in JSDoc comments.
*
* @name jsdoc-empty-line-before-example
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Rounds a numeric value toward positive infinity.
* *
* * @param {number} x - input value
* * @returns {number} rounded value
* * @example
* * var v = ceil( -4.2 );
* * // returns -4.0
* * @example
* * var v = ceil( 9.99999 );
* * // returns 10.0
* *\/
* var ceil = Math.ceil;
*
* @example
* // Good...
*
* /**
* * Rounds a numeric value toward positive infinity.
* *
* * @param {number} x - input value
* * @returns {number} rounded value
* *
* * @example
* * var v = ceil( -4.2 );
* * // returns -4.0
* *
* * @example
* * var v = ceil( 9.99999 );
* * // returns 10.0
* *\/
* var ceil = Math.ceil;
*/
rules[ 'stdlib/jsdoc-empty-line-before-example' ] = 'error';

/**
* Require `\`` be used as the fenced code marker.
*
* @name jsdoc-fenced-code-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '`' ]
* @see [fenced-code-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-fenced-code-marker}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ~~~javascript
* * y = x;
* * ~~~
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ```javascript
* * y = x;
* * ```
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-fenced-code-marker' ] = [ 'error', '`' ];

/**
* Require definitions be placed at the end of the description.
*
* @name jsdoc-final-definition
* @memberof rules
* @type {string}
* @default 'error'
* @see [final-definition]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-final-definition}
*
* @example
* // Bad...
*
* /**
* * Squares a [number][number].
* *
* * [number]: https://example.com
* *
* * Additional information.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a [number][number].
* *
* * Additional information.
* *
* * [number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-final-definition' ] = 'error';

/**
* Prevent too many spaces from being used to hard break.
*
* @name jsdoc-hard-break-spaces
* @memberof rules
* @type {string}
* @default 'error'
* @see [hard-break-spaces]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-hard-break-spaces}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * Dots represent⋅⋅⋅
* * spaces.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * Dots represent⋅⋅
* * spaces.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-hard-break-spaces' ] = 'error';

/**
* Require that JSDoc descriptions start with an uppercase letter and end with a period.
*
* @name jsdoc-leading-description-sentence
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
*
* /**
* * returns a pseudo-random number on `[0,1]`
* *
* * @returns {number} uniform random number
* *
* * @example
* * var y = rand();
* * // e.g., returns 0.5363925252089496
* *\/
* function rand() {
*     return Math.random();
* }
*
* @example
* // Good...
*
* /**
* * Returns a pseudo-random number on `[0,1]`.
* *
* * @returns {number} uniform random number
* *
* * @example
* * var y = rand();
* * // e.g., returns 0.5363925252089496
* *\/
* function rand() {
*     return Math.random();
* }
*/
rules[ 'stdlib/jsdoc-leading-description-sentence' ] = [ 'error', {
	'whitelist': [
		'ndarray',
		'rehype',
		'remark',
		'stdlib',
		'x-axis',
		'y-axis',
		'`x`',
		'`x`-value',
		'`y`',
		'`y`-value'
	]
}];

/**
* Prevent unnecessary indentation of list item bullets.
*
* @name jsdoc-list-item-bullet-indent
* @memberof rules
* @type {string}
* @default 'error'
* @see [list-item-bullet-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-bullet-indent}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* *   -   Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-list-item-bullet-indent' ] = 'error';

/**
* Prevent mixed indentation in list item content.
*
* @name jsdoc-list-item-content-indent
* @memberof rules
* @type {string}
* @default 'error'
* @see [list-item-content-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-content-indent}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * 1.  Item
* *
* *      1.  Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * 1.  Item
* *
* *     1.  Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-list-item-content-indent' ] = 'error';

/**
* Lint JSDoc descriptions using remark.
*
* @name jsdoc-markdown-remark
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Do this. Do that.
* *
* * ## Methods
* *
* * Duplicate heading.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Do this. Do that.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-markdown-remark' ] = [ 'error',
	{
		'config': require( './../../remark/.remarkrc.jsdoc.js' )
	}
];

/**
* Require angle-bracketed links to include a protocol.
*
* @name jsdoc-no-auto-link-without-protocol
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-auto-link-without-protocol]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-auto-link-without-protocol}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * <foo@bar.com>
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * <mailto:foo@bar.com>
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-auto-link-without-protocol' ] = 'error';

/**
* Require blank lines in blockquotes have a marker.
*
* @name jsdoc-no-blockquote-without-marker
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-blockquote-without-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-blockquote-without-marker}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * > This is a...
* *
* * > ...blockquote.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * > This is a...
* * >
* * > ...blockquote.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-blockquote-without-marker' ] = 'error';

/**
* Do not allow too many consecutive blank lines. NOTE: disabled to allow some discretion in terms of layout and readability.
*
* @name jsdoc-no-consecutive-blank-lines
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-consecutive-blank-lines]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-consecutive-blank-lines}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* *
* * Discuss methods.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Discuss methods.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-consecutive-blank-lines' ] = 'off';

/**
* Do not allow duplicate definitions.
*
* @name jsdoc-no-duplicate-definitions
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duplicate-definitions]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-definitions}
*
* @example
* // Bad...
*
* /**
* * Squares a [number][number].
* *
* * [number]: https://example.com
* * [number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a [number][number].
* *
* * [number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-duplicate-definitions' ] = 'error';

/**
* Do not allow duplicate headings.
*
* @name jsdoc-no-duplicate-headings
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duplicate-headings]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Discuss methods.
* *
* * ## Methods
* *
* * Discuss methods.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Discuss methods.
* *
* * ## Notes
* *
* * Discuss notes.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-duplicate-headings' ] = 'error';

/**
* Do not allow duplicate headings in the same section.
*
* @name jsdoc-no-duplicate-headings-in-section
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duplicate-headings-in-section]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings-in-section}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ## Heading
* *
* * ### Subheading
* *
* * ### Subheading
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ## Heading 1
* *
* * ### Subheading
* *
* * ## Heading 2
* *
* * ### Subheading
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-duplicate-headings-in-section' ] = 'error';

/**
* Do not allow JSDoc tags to appear more than once in a JSDoc comment.
*
* @name jsdoc-no-duplicate-tags
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-duplicate-tags' ] = 'error';

/**
* Prevent use of emphasis in place of a heading.
*
* @name jsdoc-no-emphasis-as-heading
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * _Boop_
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-emphasis-as-heading' ] = 'error';

/**
* Prevent empty URLs for links and images.
*
* @name jsdoc-no-empty-url
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop [beep]().
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop [beep](http://foo.bar/baz).
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-empty-url' ] = 'error';

/**
* Prevent indentation of heading content.
*
* @name jsdoc-no-heading-content-indent
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ##    Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-heading-content-indent' ] = 'error';

/**
* Prevent indentation of headings.
*
* @name jsdoc-no-heading-indent
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* *    ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-heading-indent' ] = 'error';

/**
* Prevent paragraphs which appear to be h7+ "headings".
*
* @name jsdoc-no-heading-like-paragraph
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ####### Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-heading-like-paragraph' ] = 'error';

/**
* Prevent headings from ending with specified characters.
*
* @name jsdoc-no-heading-punctuation
* @memberof rules
* @type {Array}
* @default [ 'error', '.,;:!?' ]
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ## Boop!
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-heading-punctuation' ] = [ 'error', '.,;:!?' ];

/**
* Prevent HTML from being used.
*
* @name jsdoc-no-html
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep boop.
* *
* * <h2>References</h2>
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep boop.
* *
* * ## References
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-html' ] = 'error';

/**
* Prevent inline padding of markers.
*
* @name jsdoc-no-inline-padding
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop: _ beep _.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop: _beep_.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-inline-padding' ] = 'error';

/**
* Prevent URLs without angle-brackets from being used.
*
* @name jsdoc-no-literal-urls
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ## Links
* *
* * -   http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Links
* *
* * -   <http://foo.bar/baz>
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-literal-urls' ] = 'error';

/**
* Prevent indentation of paragraph content.
*
* @name jsdoc-no-paragraph-content-indent
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* *    Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-paragraph-content-indent' ] = 'error';

/**
* Prevent references from being used like URLs.
*
* @name jsdoc-no-reference-like-url
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep [boop](baz).
* *
* * [baz]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep [boop][baz].
* *
* * [baz]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-reference-like-url' ] = 'error';

/**
* Allow shell commands to be prefixed with `$` symbols.
*
* @name jsdoc-no-shell-dollars
* @memberof rules
* @type {string}
* @default 'off'
*
* @example
* // Bad...
*
* /**
* * Beep boop.
* *
* * ```bash
* * $ echo beep
* * ```
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep boop.
* *
* * ```bash
* * echo beep
* * ```
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-shell-dollars' ] = 'off';

/**
* Prevent shortcut reference images.
*
* @name jsdoc-no-shortcut-reference-image
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep ![boop].
* *
* * [boop]: http://foo.bar/baz.png
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep ![boop][].
* *
* * [boop]: http://foo.bar/baz.png
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-shortcut-reference-image' ] = 'error';

/**
* Prevent shortcut reference links.
*
* @name jsdoc-no-shortcut-reference-link
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep [boop].
* *
* * [boop]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep [boop][boop].
* *
* * [boop]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-shortcut-reference-link' ] = 'error';

/**
* Prevent unnecessary indentation before tables.
*
* @name jsdoc-no-table-indentation
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* *   | x   | y    |
* *   | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * | x   | y    |
* * | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-table-indentation' ] = 'error';

/**
* Forbid the use of tabs.
*
* @name jsdoc-no-tabs
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep.
* *
* * -	List item starting with a tab.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep.
* *
* * -   List item starting with spaces.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-tabs' ] = 'error';

/**
* Prevent references to undefined definitions.
*
* @name jsdoc-no-undefined-references
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep [boop][boop].
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep [boop][boop].
* *
* * [boop]: http://example.com
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-undefined-references' ] = 'error';

/**
* Forbid unused definitions.
*
* @name jsdoc-no-unused-definitions
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * [beep]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop [beep][beep].
* *
* * [beep]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-unused-definitions' ] = 'error';

/**
* Prefer ordered, but allow discretion when determining appropriate ordered list marker value.
*
* @name jsdoc-ordered-list-marker-value
* @memberof rules
* @type {Array}
* @default [ 'off', 'ordered' ]
* @see [ordered-list-marker-value]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-value}
*
* @example
* // Okay...
*
* /**
* * Squares a number.
* *
* * 1. foo
* * 1. bar
* * 1. beep
* * 1. boop
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * 1. foo
* * 2. bar
* * 3. beep
* * 4. boop
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-ordered-list-marker-value' ] = [ 'off', 'ordered' ];

/**
* Enforce that @private tags are not missing in unassigned function declarations.
*
* @name jsdoc-private-annotation
* @memberof rules
* @type {string}
* @default 'warn'
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @private
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-private-annotation' ] = 'warn';

/**
* Enforce marker style conventions for return annotations in JSDoc examples.
*
* @name jsdoc-return-annotations-marker
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* /**
* * Squares a number.
* *
* * @param {number} x - input value
* * @returns {number} x*x
* *
* * @example
* * var y = square( 3.0 );
* * // => 9.0
* *
* * console.log( square( 2.0 ) );
* * // returns 4.0
* *\/
* function square( x ) {
*   return x*x;
* }
*
* @example
* // Good...
* /**
* * Squares a number.
* *
* * @param {number} x - input value
* * @returns {number} x*x
* *
* * @example
* * var y = square( 3.0 );
* * // returns 9.0
* *
* * console.log( square( 2.0 ) );
* * // => 4.0
* *\/
* function square( x ) {
*   return x*x;
* }
*/
rules[ 'stdlib/jsdoc-return-annotations-marker' ] = 'error';

/**
* Enforce that property names in return annotations inside of example code are quoted using single quotes.
*
* @name jsdoc-return-annotations-quote-props
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* /**
* * Converts the first letter of each object key to uppercase.
* *
* * @param {Object} obj - source object
* * @returns {Object} new object
* *
* * @example
* * var obj1 = {
* *     'aa': 1,
* *     'bb': 2
* * };
* *
* * var obj2 = capitalizeKeys( obj1 );
* * // returns { Aa: 1, "Bb": 2 }
* *\/
* function capitalizeKeys( obj ) {
*     var out;
*     var key;
*     var k;
*     out = {};
*     for ( key in obj ) {
*         if ( hasOwnProp( obj, key ) ) {
*             if ( key === '' ) {
*                 out[ key ] = obj[ key ];
*             } else {
*                 k = key.charAt( 0 ).toUpperCase() + key.slice( 1 );
*                 out[ k ] = obj[ key ];
*             }
*         }
*     }
*     return out;
* }
*
* @example
* // Good...
* /**
* * Converts the first letter of each object key to uppercase.
* *
* * @param {Object} obj - source object
* * @returns {Object} new object
* *
* * @example
* * var obj1 = {
* *     'aa': 1,
* *     'bb': 2
* * };
* *
* * var obj2 = capitalizeKeys( obj1 );
* * // returns { 'Aa': 1, 'Bb': 2 }
* *\/
* function capitalizeKeys( obj ) {
*     var out;
*     var key;
*     var k;
*     out = {};
*     for ( key in obj ) {
*         if ( hasOwnProp( obj, key ) ) {
*             if ( key === '' ) {
*                 out[ key ] = obj[ key ];
*             } else {
*                 k = key.charAt( 0 ).toUpperCase() + key.slice( 1 );
*                 out[ k ] = obj[ key ];
*             }
*         }
*     }
*     return out;
* }
*/
rules[ 'stdlib/jsdoc-return-annotations-quote-props' ] = 'error';

/**
* Require `*` be used as the strong marker.
*
* @name jsdoc-strong-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '*' ]
* @see [strong-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-strong-marker}
*
* @example
* // Bad...
*
* /**
* * Squares a __number__.
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a **number**.
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-strong-marker' ] = [ 'error', '*' ];

/**
* Require table cell padding.
*
* @name jsdoc-table-cell-padding
* @memberof rules
* @type {Array}
* @default [ 'error', 'padded' ]
* @see [table-cell-padding]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-table-cell-padding}
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * |Beep|Boop|
* * |----|----|
* * |foo |bar |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * | Beep | Boop |
* * | ---- | ---- |
* * | foo  | bar  |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-table-cell-padding' ] = [ 'error', 'padded' ];

/**
* Require table pipes to be aligned.
*
* @name jsdoc-table-pipe-alignment
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * | x | y |
* * | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * | x   | y    |
* * | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-table-pipe-alignment' ] = 'error';

/**
* Require pipes as fences for table rows.
*
* @name jsdoc-table-pipes
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * x   | y
* * any | boop
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * | x   | y    |
* * | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-table-pipes' ] = 'error';

/**
* Require that only allowed JSDoc tags are used.
*
* @name jsdoc-tag-names
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @arg {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-tag-names' ] = 'error';

/**
* Require that JSDoc tags follow a specified order.
*
* @name jsdoc-tag-order
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @returns {number} x squared
* * @param {number} x - input number
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-tag-order' ] = 'error';

/* eslint-disable stdlib/jsdoc-tag-spacing */

/**
* Require that JSDoc tags are properly padded with spaces.
*
* @name jsdoc-tag-spacing
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @param{number} x - input number
* *@returns {number }x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-tag-spacing' ] = 'error';

/* eslint-enable stdlib/jsdoc-tag-spacing */

/**
* Require that the unordered list marker be a dash `-`.
*
* @name jsdoc-unordered-list-marker-style
* @memberof rules
* @type {Array}
* @default [ 'error', '-' ]
* @see [unordered-list-marker-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-unordered-list-marker-style}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * *   foo
* * *   bar
* * *   beep
* * *   boop
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   foo
* * -   bar
* * -   beep
* * -   boop
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-unordered-list-marker-style' ] = [ 'error', '-' ];

/**
* Enforce that export statements are placed at the end of a file.
*
* @name module-exports-last
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var randn = require( './randn.js' );
*
* module.exports = randn;
*
* var factory = require( './factory.js' );
*
* module.exports.factory = factory;
*
* @example
* // Good...
* var randn = require( './randn.js' );
* var factory = require( './factory.js' );
*
* module.exports = randn;
* module.exports.factory = factory;
*/
rules[ 'stdlib/module-exports-last' ] = 'error';

/**
* Enforce that the `Array` constructor is invoked with the `new` keyword.
*
* @name new-cap-array
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var arr = Array( 101 );
*
* @example
* // Good...
* var arr = new Array( 101 );
*/
rules[ 'stdlib/new-cap-array' ] = 'error';

/**
* Enforce that error constructors are invoked with the `new` keyword.
*
* @name new-cap-error
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var err = Error( 'error message' );
*
* @example
* // Good...
* var err = new Error( 'error message' );
*/
rules[ 'stdlib/new-cap-error' ] = 'error';

/**
* Enforce that the `RegExp` constructor is invoked with the `new` keyword.
*
* @name new-cap-regexp
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var re = RegExp( '[0-9]' );
*
* @example
* // Good...
* var re = new RegExp( '[0-9]' );
*/
rules[ 'stdlib/new-cap-regexp' ] = 'error';

/**
* Enforce that `require()` calls have only string literals as parameters.
*
* @name no-dynamic-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var pkg = '@stdlib/math/base/special/betainc';
* var betainc = require( pkg );
*
* @example
* // Good...
* var betainc = require( '@stdlib/math/base/special/betainc' );
*/
rules[ 'stdlib/no-dynamic-require' ] = 'error';

/**
* Enforce that `require()` expressions are not immediately invoked.
*
* @name no-immediate-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var debug = require( 'debug' )( 'stdlib' );
*
* @example
* // Good...
* var logger = require( 'debug' );
* var debug = logger( 'stdlib' );
*/
rules[ 'stdlib/no-immediate-require' ] = 'off'; // TODO: Enable once require( 'object-keys').shim() has been replaced

/**
* Disallow `require()` calls of another package's internals.
*
* @name no-internal-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var betainc = require( '@stdlib/math/base/special/betainc/lib/index.js' );
*
* @example
* // Good...
* var betainc = require( '@stdlib/math/base/special/betainc' );
*/
rules[ 'stdlib/no-internal-require' ] = 'error';

/**
* Disallow multiple blank lines.
*
* @name no-multiple-empty-lines
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* // MAIN //
*
*
* function xlogy( x, y ) {
*   if ( x === 0.0 && !isnan( y ) ) {
*     return 0.0;
*   }
*
*
*   return x * ln( y );
* }
*
* @example
* // Good...
*
* // MAIN //
*
* function xlogy( x, y ) {
*   if ( x === 0.0 && !isnan( y ) ) {
*     return 0.0;
*   }
*   return x * ln( y );
* }
*/
rules[ 'stdlib/no-multiple-empty-lines' ] = 'error';

/**
* Disallow usage of the built-in global `Math` object.
*
* @name no-builtin-math
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var out = Math.exp( 2.0 );
* // returns ~7.389
*
* @example
* // Good...
* var exp = require( '@stdlib/math/base/special/exp' );
* var out = exp( 2.0 );
* // returns ~7.389
*/
rules[ 'stdlib/no-builtin-math' ] = 'error';

/**
* Enforce that one does not use nested property access for `require()` expressions.
*
* @name no-nested-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var special = require( '@stdlib' ).math.base.special;
*
* @example
* // Good...
* var special = require( '@stdlib/math/base' ).special;
*
* @example
* // Good...
* var special = require( '@stdlib/math/base/special' );
*/
rules[ 'stdlib/no-nested-require' ] = 'error';

/**
* Never allow a variable to be declared multiple times within the same scope or for built-in globals to be redeclared.
*
* @name no-redeclare
* @memberof rules
* @type {Array}
* @see [no-redeclare]{@link http://eslint.org/docs/rules/no-redeclare}
*
* @example
* // Bad...
* var a = 'beep';
* // ...
* var a = 'boop';
*
* @example
* // Good...
* var a = 'beep';
* // ...
* a = 'boop';
*/
rules[ 'stdlib/no-redeclare' ] = [ 'error', {
	'builtinGlobals': true,
	'globalsWhitelist': [
		'Array',
		'ArrayBuffer',
		'Boolean',
		'Buffer',
		'DataView',
		'Date',
		'Error',
		'EvalError',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Int16Array',
		'Int32Array',
		'Map',
		'Number',
		'Object',
		'Promise',
		'RangeError',
		'ReferenceError',
		'RegExp',
		'Set',
		'SharedArrayBuffer',
		'String',
		'Symbol',
		'SyntaxError',
		'TypeError',
		'Uint8Array',
		'Uint8ClampedArray',
		'Uint16Array',
		'Uint32Array',
		'URIError'
	]
}];

/**
* Never allow `require()` calls of absolute file paths.
*
* @name no-require-absolute-path
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var stdlib = require( '/path/to/stdlib' );
*
* @example
* // Good...
* var stdlib = require( '@stdlib' );
*/
rules[ 'stdlib/no-require-absolute-path' ] = 'error';

/**
* Never allow `require()` calls to explicitly require `index.<ext>` files.
*
* @name no-require-index
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var debug = require( 'debug/index.js' );
*
* @example
* // Good...
* var debug = require( 'debug' );
*/
rules[ 'stdlib/no-require-index' ] = 'error';

/**
* Never allow modules to require themselves.
*
* @name no-self-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var self = require( __filename );
*
* @example
* // Good...
* var other = require( './other.js' );
*/
rules[ 'stdlib/no-self-require' ] = 'error';

/**
* Never allow unassigned `require()` calls.
*
* @name no-unassigned-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* require( '@stdlib' );
*
* @example
* // Good...
* var stdlib = require( '@stdlib' );
*/
rules[ 'stdlib/no-unassigned-require' ] = 'error';

/**
* Enforce that `require()` calls of files end with a whitelisted file extension.
*
* @name require-file-extensions
* @memberof rules
* @type {Array}
* @default [ 'error', { 'extensionsWhitelist': [ '.js', '.json', '.node' ] } ]
*
* @example
* // Bad...
*
* // Invalid file extension:
* var readme = require( '@stdlib/array/int32/README.md' );
*
* // Missing file extension:
* var debug = require( 'debug/src/browser' );
*
* @example
* // Good...
*
* var Int32Array = require( '@stdlib/array/int32' );
*
* var debug = require( 'debug/src/browser.js' );
*/
rules[ 'stdlib/require-file-extensions' ] = [ 'off', { // TODO: Enable once all @stdlib/tools packages are moved to @stdlib/_tools
	'extensionsWhitelist': [
		'.js',
		'.json',
		'.node'
	]
}];

/**
* Enforce that specified globals are explicitly required.
*
* @name require-globals
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
* var arr = new Float32Array();
*
* @example
* // Good...
* var Float32Array = require( '@stdlib/array/float32' );
*
* var arr = new Float32Array();
*/
rules[ 'stdlib/require-globals' ] = [ 'error', {
	'globals': [
		'ArrayBuffer',
		'Buffer',
		'DataView',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Int16Array',
		'Int32Array',
		'SharedArrayBuffer',
		'Uint8Array',
		'Uint8ClampedArray',
		'Uint16Array',
		'Uint32Array'
	]
}];

/**
* Enforce that `require()` calls follow a specified order.
*
* @name require-order
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
* var validate = require( './validate.js' );
* var math = require( '@stdlib/math' );
* var debug = require( 'debug' );
* var fs = require( 'fs' );
*
* @example
* // Good...
* var fs = require( 'fs' );
* var debug = require( 'debug' );
* var math = require( '@stdlib/math' );
* var validate = require( './validate.js' );
*/
rules[ 'stdlib/require-order' ] = [ 'error', {
	'order': [
		'builtin',
		'external',
		'/^@stdlib/',
		'path'
	]
}];

/* eslint-disable stdlib/jsdoc-return-annotations-marker */

/**
* Enforce marker style conventions for return annotations.
*
* @name return-annotations-marker
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var x = 3.0;
* // => 3.0
*
* console.log( 'Hello World' );
* // returns 'Hello World'
*
* // => null
*
* @example
* // Good...
* var x = 3.0;
* // returns 3.0
*
* console.log( 'Hello World' );
* // => 'Hello World'
*/
rules[ 'stdlib/return-annotations-marker' ] = 'error';

/* eslint-enable stdlib/jsdoc-return-annotations-marker */

/* eslint-disable stdlib/jsdoc-return-annotations-quote-props */

/**
* Enforce that property names in return annotations are quoted.
*
* @name return-annotations-quote-props
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var value = {
*     'a': 1,
*     'b': true,
*     'c': [ 1, 2, 3 ]
* };
* var out = copy( value );
* /* returns
*     {
*         a: 1,
*         b: true,
*         c: [ 1, 2, 3 ]
*     }
* *\/
*
* @example
* // Good...
* var value = {
*     'a': 1,
*     'b': true,
*     'c': [ 1, 2, 3 ]
* };
* var out = copy( value );
* /* returns
*     {
*         'a': 1,
*         'b': true,
*         'c': [ 1, 2, 3 ]
*     }
* *\/
*/
rules[ 'stdlib/return-annotations-quote-props' ] = 'error';

/* eslint-enable stdlib/jsdoc-return-annotations-quote-props */

/**
* Enforce formatting of section header comments.
*
* @name section-headers
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad... (require two trailing slashes)
*
* // EXPORTS
*
* module.exports = {};
*
* @example
* // Bad... (require a known header type)
*
* // EXPRTS //
*
* module.exports = {};
*
* @example
* // Bad... (require all uppercase letters)
*
* // EXPorts //
*
* module.exports = {};
*
* @example
* // Good...
*
* // EXPORTS //
*
* module.exports = {};
*/
rules[ 'stdlib/section-headers' ] = 'error';

/**
* Enforce that boolean expressions are wrapped in parentheses when used as conditions in a ternary operator.
*
* @name ternary-condition-parentheses
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* var randu = require( '@stdlib/random/base/randu' );
*
* var bool = randu() > 0.5 ? 1 : 0;
*
* @example
* // Good...
*
* var randu = require( '@stdlib/random/base/randu' );
*
* var bool = ( randu() > 0.5 ) ? 1 : 0;
*/
rules[ 'stdlib/ternary-condition-parentheses' ] = 'error';

/**
* Enforce that required stdlib constants have uppercase variable names.
*
* @name uppercase-required-constants
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* var eps = require( '@stdlib/constants/math/float64-eps' );
*
* @example
* // Good...
*
* var EPS = require( '@stdlib/constants/math/float64-eps' );
*/
rules[ 'stdlib/uppercase-required-constants' ] = 'error';

/**
* Require section headers to be padded with empty lines.
*
* @name section-header-empty-lines
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* // EXPORTS //
* module.exports = {};
*
* @example
* // Good...
*
* // EXPORTS //
*
* module.exports = {};
*/
rules[ 'stdlib/section-header-empty-lines' ] = 'error';

/**
* Require variable declarations inside of functions to be ordered by length.
*
* @name vars-order
* @memberof rules
* @type {string}
*
* @example
* // Bad...
*
* function fizzBuzz() {
*   var i;
*   var out;
*
*   for ( i = 1; i <= 100; i++ ) {
*     out = ( i % 5 === 0 ) ? "Buzz" : ( i % 3 === 0 ) ? "Fizz" : i;
*     console.log( out );
*   }
* }
*
* @example
* // Good...
*
* function fizzBuzz() {
*   var out;
*   var i;
*
*   for ( i = 1; i <= 100; i++ ) {
*     out = ( i % 5 === 0 ) ? "Buzz" : ( i % 3 === 0 ) ? "Fizz" : i;
*     console.log( out );
*   }
* }
*/
rules[ 'stdlib/vars-order' ] = [ 'error', {
	'order': 'decreasing'
}];


// EXPORTS //

module.exports = rules;
