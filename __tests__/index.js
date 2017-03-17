import config from "../"
import stylelint from "stylelint"
import test from "ava"

const validCss = (
`/*  HEADER COMMENT
--------------------------------------------------- */

.selector-1,
.selector-2,
.selector-3[type="text"] {
  display: block;
  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 0%));
  color: hsl(0, 0%, 0%);
}

.selector-a,
.selector-b {
  top: calc(calc(1em * 2) / 3);
  padding: 10px !important;
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

@media (min-width >= 60em) {

  .selector {
    transform: translate(1, 1) scale(3);
  }

}

@media (min-orientation: portrait) {

  .selector-i + .selector-ii {
    background: hsl(0, 0%, 100%);
    font-family: "open sans", "helvetica", sans-serif;
  }
}

/*** Simple comment */
@media screen and screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {

  .selector {
    height: 10rem;
    margin: 1rem;
    margin-bottom: .5rem;
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        hsl(0, 0%, 100%) 2.5rem,
        hsl(0, 0%, 100%) 5rem
      );
    box-shadow:
      0 1px 1px hsl(0, 0%, 100%),
      0 1px 0 hsl(0, 0%, 100%),
      2px 2px 1px 1px hsl(0, 0%, 100%) inset;
  }

  .selector::after {
    background-image: url("x.svg");
    content: "→";
  }

}

`)

test("no warnings with valid css", t => {
  return stylelint.lint({
    code: validCss,
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.falsy(errored, "no errored")
    t.is(warnings.length, 0, "flags no warnings")
  })
})

const invalidCss = (
`a {
  top: 0.2rem;
}
`)

test("a warning with invalid css", t => {
  return stylelint.lint({
    code: invalidCss,
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.truthy(errored, "errored")
    t.is(warnings.length, 1, "flags one warning")
    t.is(warnings[0].text, "Unexpected leading zero (number-leading-zero)", "correct warning text")
  })
})
