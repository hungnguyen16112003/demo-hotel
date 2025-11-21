const rooms = [
  {
    id: 'standard',
    name: 'Phòng Standard',
    price: '800.000đ / đêm',
    description:
      'Không gian ấm cúng cho các cặp đôi hoặc khách công tác, nội thất tối giản nhưng đầy đủ tiện nghi.',
    amenities: ['Wifi tốc độ cao', 'Máy lạnh', 'Smart TV 43"', 'Mini bar', 'Bàn làm việc nhỏ'],
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505692794400-4d1b99c5c480?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=80',
    ],
    status: 'Hiển thị',
  },
  {
    id: 'deluxe',
    name: 'Phòng Deluxe',
    price: '1.200.000đ / đêm',
    description:
      'Diện tích lớn hơn, cửa sổ hướng biển với ánh sáng tự nhiên, thích hợp cho kỳ nghỉ thư giãn.',
    amenities: ['Giường king size', 'Bồn tắm đứng', 'Máy pha cà phê', 'Két an toàn', 'Bluetooth speaker'],
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    ],
    status: 'Hiển thị',
  },
  {
    id: 'suite',
    name: 'Phòng Suite',
    price: '2.200.000đ / đêm',
    description:
      'Không gian riêng biệt phòng khách + phòng ngủ, ban công rộng mở, dịch vụ phòng 24/7.',
    amenities: ['Ban công riêng', 'Phòng khách riêng', 'Bồn tắm nằm', 'Dịch vụ phòng 24/7', 'Máy lọc không khí'],
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    ],
    status: 'Ẩn',
  },
]

export default rooms
