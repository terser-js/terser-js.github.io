"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2019/9/9/terser-v4.3.1","metadata":{"permalink":"/blog/2019/9/9/terser-v4.3.1","source":"@site/blog/2019-9-9-terser-v4.3.1.md","title":"terser v4.3.1","description":"Version 4.3.1 is out!","date":"2019-09-09T00:00:00.000Z","formattedDate":"September 9, 2019","tags":[],"readingTime":0.305,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"terser v4.3.1"},"nextItem":{"title":"terser v4.3.0","permalink":"/blog/2019/9/7/terser-v4.3.0"}},"content":"Version 4.3.1 is out!\\n\\n### Here\'s what\'s new:\\n\\n - Fixed an issue from 4.3.0 where any block scope within a for loop erroneously had its parent set to the function scopee\\n - Fixed an issue where compressing IIFEs with argument expansions would result in some parameters becoming undefined\\n - addEventListener options argument\'s properties are now part of the DOM properties list."},{"id":"/2019/9/7/terser-v4.3.0","metadata":{"permalink":"/blog/2019/9/7/terser-v4.3.0","source":"@site/blog/2019-9-7-terser-v4.3.0.md","title":"terser v4.3.0","description":"Version 4.3.0 is out!","date":"2019-09-07T00:00:00.000Z","formattedDate":"September 7, 2019","tags":[],"readingTime":0.325,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"terser v4.3.0"},"prevItem":{"title":"terser v4.3.1","permalink":"/blog/2019/9/9/terser-v4.3.1"},"nextItem":{"title":"terser v4.2.1","permalink":"/blog/2019/8/24/terser-v4.2.1"}},"content":"Version 4.3.0 is out!\\n\\n### Here\'s what\'s new:\\n\\n - Do not drop computed object keys with side effects\\n - Functions passed to other functions in calls are now wrapped in parentheses by default, which speeds up loading most modules\\n - Objects with computed properties are now less likely to be hoisted\\n - Speed and memory efficiency optimizations\\n - Fixed scoping issues with `try` and `switch`"},{"id":"/2019/8/24/terser-v4.2.1","metadata":{"permalink":"/blog/2019/8/24/terser-v4.2.1","source":"@site/blog/2019-8-24-terser-v4.2.1.md","title":"terser v4.2.1","description":"Version 4.2.1 is out!","date":"2019-08-24T00:00:00.000Z","formattedDate":"August 24, 2019","tags":[],"readingTime":0.425,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"terser v4.2.1"},"prevItem":{"title":"terser v4.3.0","permalink":"/blog/2019/9/7/terser-v4.3.0"},"nextItem":{"title":"terser v4.2.0","permalink":"/blog/2019/8/19/terser-v4.2.0"}},"content":"Version 4.2.1 is out!\\n\\n### Here\'s what\'s new:\\n\\n - Minor refactors\\n - Fixed a bug similar to [#369](https://github.com/terser-js/terser/issues/369) in collapse_vars\\n - Functions can no longer be inlined into a place where they\'re going to be compared with themselves.\\n - reduce_funcs option is now legacy, as using reduce_vars without reduce_funcs caused some weird corner cases. As a result, it is now implied in reduce_vars and can\'t be turned off without turning off reduce_vars.\\n - Bug which would cause a random stack overflow has now been fixed."},{"id":"/2019/8/19/terser-v4.2.0","metadata":{"permalink":"/blog/2019/8/19/terser-v4.2.0","source":"@site/blog/2019-8-19-terser-v4.2.0.md","title":"terser v4.2.0","description":"Version 4.2.0 is out!","date":"2019-08-19T00:00:00.000Z","formattedDate":"August 19, 2019","tags":[],"readingTime":0.54,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"terser v4.2.0"},"prevItem":{"title":"terser v4.2.1","permalink":"/blog/2019/8/24/terser-v4.2.1"},"nextItem":{"title":"Hello World","permalink":"/blog/2019/7/24/hello-world"}},"content":"Version 4.2.0 is out!\\n\\n### Here\'s what\'s new:\\n\\n - When the source map URL is `inline`, don\'t write it to a file.\\n - Fixed output parens when a lambda literal is the tag on a tagged template string.\\n - The `mangle.properties.undeclared` option was added. This enables the property mangler to mangle properties of variables which can be found in the name cache, but whose properties are not known to this Terser run.\\n - The v8 bug where the toString and source representations of regexes like `RegExp(\\"\\\\\\\\\\\\n\\")` includes an actual newline is now fixed.\\n - Now we\'re guaranteed to not have duplicate comments in the output\\n - Domprops updates"},{"id":"/2019/7/24/hello-world","metadata":{"permalink":"/blog/2019/7/24/hello-world","source":"@site/blog/2019-7-24-hello-world.md","title":"Hello World","description":"Yay! This is officially the first blog post!","date":"2019-07-24T00:00:00.000Z","formattedDate":"July 24, 2019","tags":[],"readingTime":0.28,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Hello World"},"prevItem":{"title":"terser v4.2.0","permalink":"/blog/2019/8/19/terser-v4.2.0"}},"content":"Yay! This is officially the first blog post!\\n\\nFrom this point on we will be using this section to announce terser releases and changelogs. There will also be some other types of posts so be sure to check it out!\\n\\nMeanwhile feel free to see our new website with full terser documentation and an awesome [REPL](https://try.terser.org)!"}]}')}}]);