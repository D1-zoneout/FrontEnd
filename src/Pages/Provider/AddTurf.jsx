import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProviderNavbar from '../../Components/ProviderNavbar';

function AddTurf() {
  const [info, setInfo] = useState({
    turfName: '',
    ownerName: '',
    sportType: '',
    city: 'Pune',
    state: 'Maharashtra',
    pinCode: '',
    fullAddress: '',
    mapUrl: '',
    maxPlayersAllowed: '',
    pricingPerHour: '',
    cancellationPolicy: '',
    penaltyCharges: '',
  });

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (images.length > 0) {
      const previews = images.map((file) => URL.createObjectURL(file));
      setPreviewImages(previews);
    }
  }, [images]);

  const onAdd = () => {
    const { turfName, ownerName, pricingPerHour } = info;
    if (!turfName || !ownerName || !pricingPerHour) {
      toast.warn('Please fill all required fields');
      return;
    }
    toast.success('Turf added successfully');
    navigate('/provider/dashboard');
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <>
    <ProviderNavbar /> 
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Turf</h2>

        <div className="space-y-4">
          <Input label="Turf Name" value={info.turfName} onChange={e => setInfo({ ...info, turfName: e.target.value })} />
          <Input label="Owner Name" value={info.ownerName} onChange={e => setInfo({ ...info, ownerName: e.target.value })} />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sport Type</label>
            <select
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800 focus:outline-indigo-600"
              value={info.sportType}
              onChange={e => setInfo({ ...info, sportType: e.target.value })}
            >
              <option value="">Select Sport</option>
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
              <option value="Tennis">Tennis</option>
            </select>
          </div>

          <Input label="City" value={info.city} disabled />
          <Input label="State" value={info.state} onChange={e => setInfo({ ...info, state: e.target.value })} />
          <Input label="Pin Code" value={info.pinCode} onChange={e => setInfo({ ...info, pinCode: e.target.value })} />
          <TextArea label="Full Address" value={info.fullAddress} onChange={e => setInfo({ ...info, fullAddress: e.target.value })} />
          <Input label="Google Map URL" value={info.mapUrl} onChange={e => setInfo({ ...info, mapUrl: e.target.value })} />
          <Input label="Max Players Allowed" type="number" value={info.maxPlayersAllowed} onChange={e => setInfo({ ...info, maxPlayersAllowed: e.target.value })} />
          <Input label="Pricing Per Hour (₹)" type="number" value={info.pricingPerHour} onChange={e => setInfo({ ...info, pricingPerHour: e.target.value })} />
          <TextArea label="Cancellation Policy" value={info.cancellationPolicy} onChange={e => setInfo({ ...info, cancellationPolicy: e.target.value })} />
          <Input label="Penalty Charges (₹)" type="number" value={info.penaltyCharges} onChange={e => setInfo({ ...info, penaltyCharges: e.target.value })} />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
            <input
              type="file"
              multiple
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800"
              onChange={(e) => setImages(Array.from(e.target.files))}
            />
            <div className="flex gap-2 mt-2 flex-wrap">
              {previewImages.map((src, idx) => (
                <img key={idx} src={src} alt="preview" className="w-20 h-20 object-cover rounded border" />
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button onClick={onCancel} className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">Cancel</button>
            <button onClick={onAdd} className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Save</button>
          </div>
        </div>
      </div>
    </div></>
   
  );
}

const Input = ({ label, value, onChange, type = 'text', disabled = false }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800 bg-white focus:outline-indigo-600"
    />
  </div>
);

const TextArea = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800 bg-white focus:outline-indigo-600"
      rows={3}
    ></textarea>
  </div>
);

export default AddTurf;
