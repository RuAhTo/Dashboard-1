# Dashboard Uppgift

A personalized dashboard offering weather updates, favorite links, a dictionary, and a notepad.

## Installation

1. Run `npm install` in the terminal.
2. Add your API keys to the respective files: `weather.js` and `unsplash.js`.
3. Execute `npm run dev` in the terminal.

## Usage

**Customize the title:**
- Click anywhere on the title, remove the default text, and input your text.
- Click anywhere else to save the title in local storage.

**Weather updates:**
- The weather feature utilizes geolocation; ensure you accept the request to access your location.

**Save favorite links:**
- Provide a title and insert the link.
- Submit the form (Note: Use a full link format like "http://www.example.com").

**Dictionary:**
- Search for a word to use the integrated dictionary.

**Notepad:**
- The notepad saves automatically upon input and persists until the user removes it.

**Random background:**
- Press the "random background" button to switch to a new background.

## Features

- Local clock and date
- Customizable title (defaults to "Dashboard" if empty)
- Weather updates via geolocation (requires user consent)
- Save favorite links with custom titles
- Integrated dictionary
- Notepad for quick notes
- Regenerate random background picture

## Documentation

For additional details and user guides, refer to the following documentation:

- OpenWeatherMap API Guide for API Key: [OpenWeatherMap Guide](https://openweathermap.org/guide)
- Unsplash Image API Guide for API Key: [Unsplash Developer Guide](https://unsplash.com/developers)

## Contributing

We welcome contributions! If you'd like to contribute to the project, please follow our guidelines outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is not licensed.

## Contact

If you need support or have any questions, feel free to contact us at Ruben.Ahlin@Chasacademy.com.

## Acknowledgments

This project is built with Vite and utilizes Axios for seamless API interactions. We appreciate the contributions of these and other open-source projects that make this dashboard possible.
