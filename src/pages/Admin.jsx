import { useState } from "react";
import initialRooms from "../data/rooms";

const statusOptions = ["Hiển thị", "Ẩn"];

const defaultForm = {
  name: "",
  price: "",
  description: "",
  image: "",
  contact: "",
  status: statusOptions[0],
};

const Admin = () => {
  const [roomList, setRoomList] = useState(initialRooms);
  const [formValues, setFormValues] = useState(defaultForm);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormValues(defaultForm);
    setEditingId(null);
  };

  const handleEdit = (room) => {
    setFormValues({
      name: room.name || "",
      price: room.price || "",
      description: room.description || "",
      image: room.image || "",
      contact: room.contact || "",
      status: room.status || statusOptions[0],
    });
    setEditingId(room.id);
  };

  const handleDelete = (roomId) => {
    const confirmed = window.confirm("Bạn có chắc muốn xoá phòng này?");
    if (!confirmed) return;

    setRoomList((prev) => prev.filter((room) => room.id !== roomId));
    if (editingId === roomId) {
      resetForm();
    }
  };

  const createNewId = (name) => {
    const slug = name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return slug ? `${slug}-${Date.now()}` : `room-${Date.now()}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const sanitizedValues = {
      name: formValues.name.trim(),
      price: formValues.price.trim(),
      description: formValues.description.trim(),
      image: formValues.image.trim(),
      contact: formValues.contact.trim(),
      status: formValues.status,
    };

    if (editingId) {
      setRoomList((prev) =>
        prev.map((room) =>
          room.id === editingId
            ? {
                ...room,
                ...sanitizedValues,
              }
            : room,
        ),
      );
      console.log("Cập nhật phòng:", { id: editingId, ...sanitizedValues });
    } else {
      const newRoom = {
        id: createNewId(sanitizedValues.name || "room"),
        ...sanitizedValues,
        amenities: ["Wifi", "Máy lạnh", "TV"],
        gallery: sanitizedValues.image ? [sanitizedValues.image] : [],
      };
      setRoomList((prev) => [newRoom, ...prev]);
      console.log("Thêm phòng mới:", newRoom);
    }

    resetForm();
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 overflow-x-auto">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand">Phòng</p>
              <h1 className="text-2xl font-semibold text-slate-900">Danh sách quản trị</h1>
            </div>
            <span className="text-sm text-slate-500">(demo UI)</span>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-500 uppercase text-xs border-b border-slate-100">
                <th className="py-3">Tên phòng</th>
                <th className="py-3">Giá</th>
                <th className="py-3">Trạng thái</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {roomList.map((room) => (
                <tr key={room.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 font-semibold text-slate-800">{room.name}</td>
                  <td className="py-4 text-slate-600">{room.price}</td>
                  <td className="py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        room.status === "Hiển thị"
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {room.status}
                    </span>
                  </td>
                  <td className="py-4 space-x-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(room)}
                      className="px-3 py-1 rounded-full border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100"
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(room.id)}
                      className="px-3 py-1 rounded-full border border-red-200 text-red-600 text-xs font-semibold hover:bg-red-50"
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Thêm / chỉnh sửa phòng</h2>
              <p className="text-sm text-slate-500 mb-6">
                {editingId ? "Đang chỉnh sửa (demo)" : "Form minh hoạ (console.log khi lưu)"}
              </p>
            </div>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="text-xs font-semibold text-brand hover:text-brand-light"
              >
                Huỷ chỉnh sửa
              </button>
            )}
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="name">
                Tên phòng
              </label>
              <input
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                placeholder="Ví dụ: Phòng Premier"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="price">
                Giá phòng
              </label>
              <input
                id="price"
                name="price"
                value={formValues.price}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                placeholder="Ví dụ: 1.500.000đ / đêm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="status">
                Trạng thái hiển thị
              </label>
              <select
                id="status"
                name="status"
                value={formValues.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand/30"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="description">
                Mô tả ngắn
              </label>
              <textarea
                id="description"
                name="description"
                value={formValues.description}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                placeholder="Điểm nổi bật của phòng"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="image">
                URL ảnh
              </label>
              <input
                id="image"
                name="image"
                value={formValues.image}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                placeholder="https://"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="contact">
                Zalo / Hotline
              </label>
              <input
                id="contact"
                name="contact"
                value={formValues.contact}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                placeholder="Ví dụ: 0901 234 567"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand text-white py-3 text-sm font-semibold hover:bg-brand-light transition"
            >
              {editingId ? "Cập nhật phòng" : "Lưu"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Admin;
