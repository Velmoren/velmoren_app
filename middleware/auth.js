export default function ({ store, redirect, $cookiz }) {
  if (!$cookiz.get('auth')) {
    return redirect('/login')
  }
}
