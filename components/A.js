import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const A = ({ text, href, className }) => {
	return (
		<Link href={href} className={className}>
			{text}
		</Link>
	)
}

A.propTypes = {
	text: PropTypes.string,
	href: PropTypes.string,
	className: PropTypes.string,
}

export default A
