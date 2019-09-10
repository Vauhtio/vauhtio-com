import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

const useImage = () => {
  const data = useStaticQuery<{
    team2: { childImageSharp: { fluid: FluidObject } };
    henrik: { childImageSharp: { fluid: FluidObject } };
    timo: { childImageSharp: { fluid: FluidObject } };
    whatIsVauhtio: { childImageSharp: { fluid: FluidObject } };
    team: { childImageSharp: { fluid: FluidObject } };
  }>(graphql`
    query {
      team2: file(relativePath: { eq: "team2.jpeg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      henrik: file(relativePath: { eq: "henrik.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      timo: file(relativePath: { eq: "timo.jpeg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      whatIsVauhtio: file(relativePath: { eq: "what-is-vauhtio.jpeg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      team: file(relativePath: { eq: "team.jpeg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return data;
};

export { useImage };
