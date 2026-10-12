import React, { useState } from 'react';
import { X, Save, Download, RotateCcw, Edit3, Check } from 'lucide-react';

export default function AdminEditorModal({ isOpen, onClose, siteData, onSave, onReset }) {
  if (!isOpen) return null;

  const [editableData, setEditableData] = useState(JSON.parse(JSON.stringify(siteData)));
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const handleContactChange = (field, val) => {
    setEditableData(prev => ({
      ...prev,
      artistInfo: {
        ...prev.artistInfo,
        contact: {
          ...prev.artistInfo.contact,
          [field]: val
        }
      }
    }));
  };

  const handleTeacherChange = (field, val) => {
    setEditableData(prev => ({
      ...prev,
      teacherInfo: {
        ...prev.teacherInfo,
        [field]: val
      }
    }));
  };

  const handleSave = () => {
    onSave(editableData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(editableData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "leela_narayan_site_content.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-cream-50 rounded-2xl shadow-2xl border border-gold-500/40 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="maroon-gradient-bg text-white px-6 py-4 flex items-center justify-between border-b border-gold-500/30">
          <div className="flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-gold-400" />
            <h3 className="font-serif text-xl font-bold text-gold-400">
              Content Manager & Live Editor
            </h3>
          </div>
          <button onClick={onClose} className="text-stone-300 hover:text-white p-2 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-stone-200 bg-cream-100 text-xs font-semibold uppercase tracking-wider overflow-x-auto">
          {['contact', 'teacher', 'classes', 'achievements', 'events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 border-b-2 transition whitespace-nowrap ${
                activeTab === tab
                  ? 'border-maroon-800 text-maroon-900 bg-white font-bold'
                  : 'border-transparent text-stone-600 hover:text-maroon-800'
              }`}
            >
              {tab} Details
            </button>
          ))}
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm">
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-maroon-900">Contact & Social Media Links</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={editableData.artistInfo.contact.phone}
                    onChange={(e) => handleContactChange('phone', e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">WhatsApp Number (e.g. 919980334147)</label>
                  <input
                    type="text"
                    value={editableData.artistInfo.contact.whatsapp}
                    onChange={(e) => handleContactChange('whatsapp', e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={editableData.artistInfo.contact.email}
                    onChange={(e) => handleContactChange('email', e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">Location</label>
                  <input
                    type="text"
                    value={editableData.artistInfo.contact.address}
                    onChange={(e) => handleContactChange('address', e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">Instagram URL</label>
                  <input
                    type="text"
                    value={editableData.artistInfo.contact.instagram}
                    onChange={(e) => handleContactChange('instagram', e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">YouTube URL</label>
                  <input
                    type="text"
                    value={editableData.artistInfo.contact.youtube}
                    onChange={(e) => handleContactChange('youtube', e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'teacher' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-maroon-900">My Inspiration (Teacher Lineage) Details</h4>
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">Teacher Name / Title</label>
                <input
                  type="text"
                  value={editableData.teacherInfo.name}
                  onChange={(e) => handleTeacherChange('name', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">Guru-Shishya Quote</label>
                <input
                  type="text"
                  value={editableData.teacherInfo.quote}
                  onChange={(e) => handleTeacherChange('quote', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">Musical Background & Training</label>
                <textarea
                  rows="3"
                  value={editableData.teacherInfo.background}
                  onChange={(e) => handleTeacherChange('background', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg"
                />
              </div>
            </div>
          )}

          {activeTab === 'classes' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-maroon-900">Music Class Offerings</h4>
              {editableData.musicClasses.map((cls, idx) => (
                <div key={cls.id} className="p-4 bg-white border border-stone-200 rounded-lg space-y-2">
                  <div className="font-bold text-maroon-900">{cls.title}</div>
                  <input
                    type="text"
                    value={cls.desc}
                    onChange={(e) => {
                      const updated = [...editableData.musicClasses];
                      updated[idx].desc = e.target.value;
                      setEditableData({ ...editableData, musicClasses: updated });
                    }}
                    className="w-full px-3 py-1.5 border border-stone-300 rounded text-xs"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-maroon-900">Achievements Timeline</h4>
              {editableData.achievements.map((ach, idx) => (
                <div key={ach.id} className="p-3 bg-white border border-stone-200 rounded-lg space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={ach.year}
                      onChange={(e) => {
                        const updated = [...editableData.achievements];
                        updated[idx].year = e.target.value;
                        setEditableData({ ...editableData, achievements: updated });
                      }}
                      className="w-20 px-2 py-1 border rounded text-xs"
                    />
                    <input
                      type="text"
                      value={ach.title}
                      onChange={(e) => {
                        const updated = [...editableData.achievements];
                        updated[idx].title = e.target.value;
                        setEditableData({ ...editableData, achievements: updated });
                      }}
                      className="flex-1 px-2 py-1 border rounded text-xs font-semibold"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-maroon-900">Upcoming Events</h4>
              {editableData.upcomingEvents.map((evt, idx) => (
                <div key={evt.id} className="p-3 bg-white border border-stone-200 rounded-lg space-y-2">
                  <input
                    type="text"
                    value={evt.name}
                    onChange={(e) => {
                      const updated = [...editableData.upcomingEvents];
                      updated[idx].name = e.target.value;
                      setEditableData({ ...editableData, upcomingEvents: updated });
                    }}
                    className="w-full px-2 py-1 border rounded text-xs font-semibold"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-cream-100 border-t border-stone-200 flex flex-wrap gap-3 items-center justify-between">
          <button
            onClick={onReset}
            className="px-4 py-2 text-stone-600 hover:text-stone-900 border border-stone-300 rounded-lg flex items-center gap-1.5 text-xs font-medium hover:bg-white transition"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Defaults
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleExportJSON}
              className="px-4 py-2 bg-stone-800 text-white rounded-lg flex items-center gap-1.5 text-xs font-medium hover:bg-stone-900 transition"
            >
              <Download className="w-4 h-4" />
              Export JSON
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2 bg-maroon-800 text-gold-400 rounded-lg flex items-center gap-1.5 text-xs font-semibold hover:bg-maroon-900 transition"
            >
              {savedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
              {savedSuccess ? 'Saved!' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
