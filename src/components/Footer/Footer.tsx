const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center mt-auto pt-4 text-base-content">
      <span>
        {`© ${new Date().getFullYear()} Quintix Technologies Ltd. All rights reserved.`}
      </span>
    </footer>
  );
};

export default Footer;
