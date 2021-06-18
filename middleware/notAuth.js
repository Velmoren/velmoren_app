export default function ({from, store, redirect, $cookiz }) {
  if ($cookiz.get('auth')) {
    return redirect(from.path)
  }
}
