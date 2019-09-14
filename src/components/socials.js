import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Socials = () => {
    const data = useStaticQuery(graphql`
    query SocialsQuery {
      site {
        siteMetadata {
          socialsData {
              name
              link
          }
        }
      }
    }
  `)

    return (
        <div>
           {data.site.siteMetadata.socialsData.map(social => (
               <a 
                href={social.link}
                style={{
                   marginLeft: '10px',
                   marginRight: '10px',
                   padding: '2px'
                  }}
               >{social.name}</a>
            ))}
        </div>
    )
}

Socials.propTypes = {
  socialsData: PropTypes.array
}

Socials.defaultProps = {
  socialsData: []
}


export default Socials
