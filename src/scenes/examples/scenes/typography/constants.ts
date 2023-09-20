import typographyConstants from '~/components/Typography/constants';

export const typographyJSON = `
{
  "theme": {
    "sansSerif": {
      "light": {
        "4xl": {
          "fontFamily": "Helvetica, Arial, Verdana, sans-serif",
          "fontWeight": 300,
          "fontSize": "7.2rem",
          "lineHeight": "8rem",
          "letterSpacing": "-0.03em"
        },
        "3xl": {
          "fontFamily": "Helvetica, Arial, Verdana, sans-serif",
          "fontWeight": 300,
          "fontSize": "5.4rem",
          "lineHeight": "7.6rem",
          "letterSpacing": "-0.03em"
        },
        ...
      },
      "regular": {
        "4xl": {
          "fontFamily": "Helvetica, Arial, Verdana, sans-serif",
          "fontWeight": 400,
          "fontSize": "7.2rem",
          "lineHeight": "8rem",
          "letterSpacing": "-0.03em"
        },
        "3xl": {
          "fontFamily": "Helvetica, Arial, Verdana, sans-serif",
          "fontWeight": 400,
          "fontSize": "5.4rem",
          "lineHeight": "7.6rem",
          "letterSpacing": "-0.03em"
        },
        ...
      },
      ...
    }
  }
}`;

export const typographyConstantsJSON = JSON.stringify(
  typographyConstants,
  null,
  2,
);
