interface LogoProps {}

function Logo({}: LogoProps) {
  return (
    <a href="/" className="">
      <img
        className="h-7.5 mr-auto w-auto"
        src="/src/assets/logo.svg"
        alt="An pointy open yellow beak pointing up from the baseline of text spelling 'Egret' in a serif font."
      />
    </a>
  );
}
export default Logo;
