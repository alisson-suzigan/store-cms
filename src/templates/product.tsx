import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import SEO from '../components/seo';
import { convertValueToMoney } from '../utils';
import theme from '../theme';
import { SingleProduct, Gallery } from '../components/shelf/type';

interface Props {
  data: SingleProduct;
}

const Product = ({ data }: Props): JSX.Element => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, value, gallery } = frontmatter;

  const renderGallery = (gallery: Gallery): JSX.Element[] => {
    return gallery.map(item => {
      const imagePath = item.childImageSharp.fixed.src;
      return <img key={item.id} src={imagePath} width="400" height="400" />;
    });
  };

  return (
    <StyledPage>
      <SEO title={title} />
      <StyledLink to="/">
        <StyledIcon>keyboard_arrow_left</StyledIcon>
        <Typography component="span" variant="h5">
          Voltar
        </Typography>
      </StyledLink>
      <StyledSection>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <StyledPrice color="primary">{value && convertValueToMoney(value)}</StyledPrice>
        <StyledGallery>
          {/* <StyledAvailable>{available && 'Indisponível'}</StyledAvailable> */}
          {gallery && renderGallery(gallery)}
        </StyledGallery>
        <Typography variant="h6" component="strong">
          Descrição:
        </Typography>
        <Typography component="div" dangerouslySetInnerHTML={{ __html: html }} />
      </StyledSection>

      <StyledBackToHome to="/">
        <Icon>keyboard_arrow_left</Icon>Voltar para página principal
      </StyledBackToHome>
    </StyledPage>
  );
};

const StyledPage = styled.section`
  max-width: 440px;
  margin: 0 auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 4%;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 0 ${theme.spacing(2)}px ${theme.spacing()}px;
  align-items: center;
  text-decoration: none;
`;

const StyledIcon = styled(Icon)`
  &.material-icons {
    font-size: 2rem;
  }
`;

const StyledPrice = styled(Typography)`
  font-size: 1.8rem;
  font-weight: bold;
  margin: ${theme.spacing(2)}px 0;
`;

const StyledGallery = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  order: -1;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
  overflow-x: auto;

  img {
    width: 100%;
    height: auto;
    padding: 5px;
  }
`;

// const StyledAvailable = styled.div`
//   position: fixed;
//   font-size: 26px;
//   font-weight: bold;
//   color: white;
//   text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
//   /* width: 100%; */
//   /* height: 100%; */
//   /* background: rgba(0, 0, 0, 0.3); */
// `;

const StyledBackToHome = styled(Link)`
  display: flex;
  align-items: center;
  margin: ${theme.spacing(4)}px ${theme.spacing(2)}px ${theme.spacing(2)}px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
`;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        available
        value
        gallery {
          id
          childImageSharp {
            fixed(quality: 80, width: 400) {
              src
            }
          }
        }
      }
    }
  }
`;

export default Product;
