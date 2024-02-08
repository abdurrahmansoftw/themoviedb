const NavLinks = () => {
  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/issues/list', label: 'Issues' },
  ]
  return (
    <ul className='flex space-x-6'>
      {links.map(({ href, label }) => (
        <li key={href}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
