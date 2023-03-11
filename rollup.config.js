import scss from 'rollup-plugin-scss'

export default {
  input: './scss/style.scss',
  plugins: [
    scss({
        output: 'css/main.css'
    })
  ]
}