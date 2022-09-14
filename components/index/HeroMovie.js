export default function HeroMovie() {
  return (
    <div className="video-wrapper h-full w-full overflow-hidden cover object-cover">
      <video
        className="object-cover max-h-auto inset-0 w-full h-full"
        autoPlay
        playsInline
        muted
        loop
      >
        <source
          src="https://olleburl.in/bryggerietsgymnasium/wp-content/uploads/2022/08/introfilm_compressed.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
