import { useState, useEffect } from "react";
import "./styles.css";

// One config object describes all three entities, so forms and tables are generated, not repeated.
const CFG = {
  cat:  { label: "category",   cols: ["Name", "Status"],
          fields: [{ n: "name", l: "Category name", t: "text" },
                   { n: "status", l: "Category status", t: "select", opts: ["Active", "Inactive"] }] },
  dept: { label: "department", cols: ["Department", "Category"], needs: "cat",
          fields: [{ n: "name", l: "Department name", t: "text" },
                   { n: "cat", l: "Select category", t: "ref", src: "cat" }] },
  svc:  { label: "service",    cols: ["Service", "Department"], needs: "dept",
          fields: [{ n: "name", l: "Service name", t: "text" },
                   { n: "dept", l: "Service department", t: "ref", src: "dept" }] },
};
const KEYS = { cat: "tn_cats", dept: "tn_depts", svc: "tn_svcs" };

// Custom hook: state that mirrors itself into localStorage.
function useStored(key) {
  const [v, setV] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key, v]);
  return [v, setV];
}

export default function App() {
  const [cat, setCat] = useStored(KEYS.cat);
  const [dept, setDept] = useStored(KEYS.dept);
  const [svc, setSvc] = useStored(KEYS.svc);
  const data = { cat, dept, svc };
  const setters = { cat: setCat, dept: setDept, svc: setSvc };
  const [form, setForm] = useState(null); // { kind, id, values, error } or null

  const nameOf = (kind, id) => data[kind].find(o => o.id === id)?.name ?? "—";
  const cells = (kind, o) =>
    kind === "cat"  ? [o.name, <span className={"tag " + (o.status === "Active" ? "a" : "i")}>{o.status}</span>]
  : kind === "dept" ? [o.name, nameOf("cat", o.cat)]
  :                   [o.name, nameOf("dept", o.dept)];

  const openForm = (kind, item) => {
    const need = CFG[kind].needs;
    if (!item && need && !data[need].length)
      return alert(`Add a ${CFG[need].label} first.`);
    setForm({ kind, id: item?.id, values: item ? { ...item } : {}, error: "" });
  };

  const submit = e => {
    e.preventDefault();
    const { kind, id, values } = form;
    const missing = CFG[kind].fields.find(f => !String(values[f.n] || "").trim());
    if (missing) return setForm({ ...form, error: missing.l + " is required." });
    setters[kind](list => id
      ? list.map(o => (o.id === id ? { ...o, ...values } : o))          // update
      : [...list, { ...values, id: crypto.randomUUID() }]);             // create
    setForm(null);
  };

  const remove = (kind, id) =>
    confirm(`Delete this ${CFG[kind].label}?`) && setters[kind](l => l.filter(o => o.id !== id));

  return (
    <>
      <nav>
        <a className="logo" href="#home"><span className="ta">தமிழ்நாடு அரசு<br /><small>Government of Tamil Nadu</small></span></a>
        {["Home", "Departments", "Services", "Issues"].map(n => <a key={n} className="l" href={"#" + n.toLowerCase()}>{n}</a>)}
      </nav>

      <header className="hero" id="home"><div className="wrap">
        <h1>குடிமக்களின் குறைகள், அரசின் பொறுப்பு</h1>
        <p>Report and track everyday issues across Tamil Nadu and find the department that owns the fix.</p>
        <div className="actions">
          {Object.keys(CFG).map(k => <button key={k} className="add" onClick={() => openForm(k)}>+ Add {CFG[k].label}</button>)}
        </div>
      </div></header>

      <section><div className="wrap">
        {Object.keys(CFG).map(k => (
          <div className="box" key={k} id={k === "dept" ? "departments" : k === "svc" ? "services" : "categories"}>
            <h3>{CFG[k].label[0].toUpperCase() + CFG[k].label.slice(1)} list</h3>
            <div className="sc">
              {!data[k].length ? <p className="empty">No {CFG[k].label} added yet.</p> : (
                <table>
                  <thead><tr><th>#</th>{CFG[k].cols.map(c => <th key={c}>{c}</th>)}<th>Actions</th></tr></thead>
                  <tbody>{data[k].map((o, i) => (
                    <tr key={o.id}><td>{i + 1}</td>
                      {cells(k, o).map((c, j) => <td key={j}>{c}</td>)}
                      <td>
                        <button className="b ed" onClick={() => openForm(k, o)}>Edit</button>{" "}
                        <button className="b up" onClick={() => openForm(k, o)}>Update</button>{" "}
                        <button className="b del" onClick={() => remove(k, o.id)}>Delete</button>
                      </td></tr>))}
                  </tbody>
                </table>)}
            </div>
          </div>))}
      </div></section>

      {form && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(10,15,40,.55)", display: "grid", placeItems: "center" }}>
          <form onSubmit={submit} noValidate style={{ background: "var(--card)", borderRadius: 10, width: "min(440px,92vw)" }}>
            <h3>{form.id ? "Update" : "Add"} {CFG[form.kind].label}</h3>
            {CFG[form.kind].fields.map(f => (
              <div key={f.n}>
                <label>{f.l}</label>
                {f.t === "text"
                  ? <input value={form.values[f.n] || ""} onChange={e => setForm({ ...form, values: { ...form.values, [f.n]: e.target.value } })} />
                  : <select value={form.values[f.n] || ""} onChange={e => setForm({ ...form, values: { ...form.values, [f.n]: e.target.value } })}>
                      <option value="">Select…</option>
                      {(f.t === "select" ? f.opts.map(x => ({ id: x, name: x })) : data[f.src])
                        .map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
                    </select>}
              </div>))}
            <p className="err">{form.error}</p>
            <div className="row">
              <button type="button" className="sec" onClick={() => setForm(null)}>Cancel</button>
              <button type="submit" className="save">{form.id ? "Update" : "Save"}</button>
            </div>
          </form>
        </div>)}
    </>
  );
}
