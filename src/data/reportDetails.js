export const reportDetails = {
  'demo-1': {
    site: 'Your uploaded screenshot',
    date: 'Oct 24, 2026',
    scores: { layout: 78, typography: 66, color: 71, spacing: 80, accessibility: 62 },
    issues: [
      { id: 1, category: 'accessibility', severity: 'high', title: 'Low text contrast', explanation: 'Some text is too faint against its background, which makes it hard to read.', fix: 'Darken the text color until the contrast ratio reaches at least 4.5:1.' },
      { id: 2, category: 'typography', severity: 'medium', title: 'Weak heading hierarchy', explanation: 'The main heading and the body text look almost the same size.', fix: 'Make the main heading about twice the size of the body text.' },
      { id: 3, category: 'color', severity: 'medium', title: 'Button blends into the page', explanation: 'The main button color is too close to the background color.', fix: 'Use a stronger accent color for the main call to action.' },
      { id: 4, category: 'layout', severity: 'low', title: 'Uneven section alignment', explanation: 'Some sections start further left than others.', fix: 'Align all sections to the same left edge.' },
      { id: 5, category: 'spacing', severity: 'low', title: 'Tight spacing between cards', explanation: 'The gap between cards is smaller than the space inside them.', fix: 'Increase the gap between cards to at least 24px.' },
    ],
  },

  bakery: {
    site: 'Bakery Shop',
    date: 'Oct 24, 2026',
    scores: { layout: 80, typography: 70, color: 58, spacing: 66, accessibility: 64 },
    issues: [
      { id: 1, category: 'color', severity: 'critical', title: 'Subtitle has low contrast', explanation: 'The grey subtitle is too faint against the cream background.', fix: 'Darken the subtitle color to reach at least 4.5:1 contrast.' },
      { id: 2, category: 'accessibility', severity: 'medium', title: 'Button text is hard to read', explanation: 'White text on the light orange button does not have enough contrast.', fix: 'Use a darker button color or dark text on the button.' },
      { id: 3, category: 'typography', severity: 'medium', title: 'Weak heading hierarchy', explanation: 'The heading and the subtitle are close in visual weight.', fix: 'Make the heading larger and bolder than the subtitle.' },
      { id: 4, category: 'spacing', severity: 'low', title: 'Cards sit too close to the button', explanation: 'There is little space between the button and the cards below it.', fix: 'Add at least 40px of space between the button and the cards.' },
    ],
  },

  travel: {
    site: 'Travel Blog',
    date: 'Oct 24, 2026',
    scores: { layout: 68, typography: 74, color: 72, spacing: 80, accessibility: 70 },
    issues: [
      { id: 1, category: 'layout', severity: 'high', title: 'Navigation links are tiny', explanation: 'The menu text is very small compared with the rest of the page.', fix: 'Increase menu text to at least 16px and add space between links.' },
      { id: 2, category: 'color', severity: 'medium', title: 'Teal button is low in contrast', explanation: 'White text on the teal button is slightly hard to read.', fix: 'Darken the button background color.' },
      { id: 3, category: 'accessibility', severity: 'medium', title: 'No visible focus style', explanation: 'Keyboard users cannot see which link or button is selected.', fix: 'Add a clear outline when a link or button is focused.' },
      { id: 4, category: 'typography', severity: 'low', title: 'Subtitle is too faint', explanation: 'The subtitle uses a very light color.', fix: 'Use a darker color for supporting text.' },
    ],
  },

  portfolio: {
    site: 'Studio Portfolio',
    date: 'Oct 24, 2026',
    scores: { layout: 66, typography: 62, color: 60, spacing: 72, accessibility: 76 },
    issues: [
      { id: 1, category: 'color', severity: 'high', title: 'Body text is dim on the dark background', explanation: 'The subtitle fades into the dark background.', fix: 'Use a lighter text color for supporting text.' },
      { id: 2, category: 'layout', severity: 'medium', title: 'Content feels left-heavy', explanation: 'Everything is aligned to the left and the right side is empty.', fix: 'Balance the layout with an image or a second column.' },
      { id: 3, category: 'typography', severity: 'low', title: 'Heading is thin on dark', explanation: 'Light text on a dark background looks thinner than it is.', fix: 'Use a slightly heavier font weight for headings.' },
      { id: 4, category: 'spacing', severity: 'low', title: 'Uneven card margins', explanation: 'The cards have different gaps on each side.', fix: 'Use the same margin around every card.' },
    ],
  },
}