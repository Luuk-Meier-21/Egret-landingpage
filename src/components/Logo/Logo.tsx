interface LogoProps {}

function Logo({}: LogoProps) {
  return (
    <a href="/" className="">
      <img
        className="h-7.5 mr-auto w-auto"
        src="logo.svg"
        alt="A sharp, slightly open yellow beak, pointing up from the baseline of the word: 'Egret' in a serif font."
      />
    </a>
  );
}
export default Logo;
