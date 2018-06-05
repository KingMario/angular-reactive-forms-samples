export const utilImportsRegExp = new RegExp(`
import { .* } from '../sourceUtils';

declare const require;
`);

export const sourceAssignmentRegExp = /source = (.+\n){5}\n  /;

export const lineSeparator = `
======

`;

export const preSource = `

<pre>
{{source}}
</pre>
`;

declare const require;
