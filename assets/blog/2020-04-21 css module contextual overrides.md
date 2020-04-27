```createdAt
2020-04-21 17:20
```

# CSS modules and contextual overrides

CSS with its many issues is loved by some while others have mixed feelings about it,
but it's safe to say its not going anywhere anytime soon.

Everyone who has worked on a medium to large scale web project knows at least some issues of CSS.
For me and many other people one of the more annoying ones that is still a common problem today is the
lack of scopes.

[CSS modules](https://github.com/css-modules/css-modules) aims to fix this issue by scoping rules in files.

>   A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.

The spec is published on github for everyone to see and suggest changes, which ensures that all supported
features are well defined and everyone is able to make their own implementation of it,
increasing the chance of adoption.

Having a spec and discussing suggestions is great and vital for new web technologies that are constantly appearing
and changing every year, however many people participating in discussions also means having more possible
solutions to a problem and deciding between equally good solutions can be hard.

## Contextual overrides

For me, one of the main issues with CSS modules was always the lack of *contextual overrides*.

In CSS it's really easy to define styles for an element, it's children and grandchildren that are placed
many levels further down in the hierarchy. In fact the syntax is easy enough for a 10 year old to be
able to learn it (talking from experience).

Let's consider the following scenario:

- we want to make a button react component with JS logic and CSS styles
- we use the button in our website, and it looks great
- after some time we add a header to the website and want to use the button there
- the button in the header should have a different style without duplicating any logic code

With traditional CSS this might look like this:

```css
/* button.css */
.button{
  background: red;
}

/* header.css */
.header .button{
  background: blue;
}
```

We can use the above CSS in any file and it will work just fine. When the button is outside of the header
it's background wil lbe red and blue when placed inside of the header.

When using CSS modules the situation becomes a lot more complicated, since the class names get obfuscated.
The previous CSS code might become:

```css
/* button.css */
.kx7dxlg{
  background: red;
}

/* header.css */
.b72saab .kx7dxlg{
  background: blue;
}
```

Can you see the issue in the above code? Since the `.button` class is scoped to the file it's used in, the
compiler has no way of knowing about the `.button` class used in the other file.

A [github issue](https://github.com/css-modules/css-modules/issues/147) for this was opened in May 2016 and is
still open at the time of writing this.
Many people proposed solutions what the feature and syntax could look like.

I have been following the issue and checking on it now and then, since CSS modules just don't seem to
be very convenient for me without it.

Even though the issue is not officially closed yet, there seems to finally be an implementation of this in
the official [css loader](https://github.com/webpack-contrib/css-loader) project.

The class names of classes defined in other files can now be accesed:

```scss
@value button from "./Button.module.scss";
```

Futhermore it's even possible to set aliases in case you need to import classes with the same name from
multiple files:

```scss
@value button as button1 from "./Button1.module.scss";
@value button as button2 from "./Button2.module.scss";
```

At the time of writing this, there does not seem to be any documentation about this.
I really hope that this feature is here to stay.

## Conclusion

CSS modules has become a good alternative to global CSS and solves the name clashing issue rather well.  
Contextual overrides offer an easy way to override styles of nested components whose position in the
hierarchy might change.

Being able to use contextual overrides in CSS modules finally allowed me to try using it and it's going well so far.
