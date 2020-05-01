# References

## Configs

### Netlify CMS - Add to your site

https://app.netlify.com/sites/storecms/deploys
https://www.netlifycms.org/docs/backends-overview/
https://www.netlifycms.org/docs/add-to-your-site/
https://www.netlifycms.org/docs/widgets/

### Typescript + Eslint + Prettier

https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project

### Typescript + Gatsby

https://blog.logrocket.com/set-up-a-typescript-gatsby-app/

### Gatsby and Netlify CMS

https://blog.logrocket.com/gatsby-netlify-cms-a-perfect-pairing-d50d59d16f67/

### Material UI

https://material-ui.com/pt/customization/default-theme/
https://material-ui.com/pt/customization/color/
https://material-ui.com/pt/components/material-icons/

graphql queries ===================

```
{
  categories: allMarkdownRemark(filter: {frontmatter: {layout: {eq: "product-category"}}}) {
    totalCount
    nodes {
      frontmatter {
        title
        layout
        icon
      }
    }
  }

  products: allMarkdownRemark {
    group(field: frontmatter___categories___category) {
      totalCount
      fieldValue
      nodes {
        id
        frontmatter {
          title
          value
          image
          date(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
}



================

product: allMarkdownRemark {
  group(field: frontmatter___categories___category) {
    nodes {
      id
      frontmatter {
        title
        categories {
          category
        }
        value
        layout
        image
        date
      }
    }
  }
  distinct(field: frontmatter___categories___category)
}





{
  product: allMarkdownRemark {
    group(field: frontmatter___categories___category) {
      totalCount
      fieldValue
      nodes {
        id
        frontmatter {
          title
          value
          image
          date(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
}
```
