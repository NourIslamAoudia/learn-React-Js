import { useEffect, useState } from "react";
import axios from "axios";
import { toastLoading, toastUpdate } from "../src/utils/toastConfig";
import Skeleton from "./loader/Skeleton";
import { FiExternalLink, FiImage } from "react-icons/fi";

const Axios = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    const loadingToastId = toastLoading("Loading data...");
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(response.data.slice(0, 50)); // Increased to 50 for better demo

      toastUpdate(loadingToastId, {
        render: "Data loaded successfully !",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });
    } catch (error) {
      toastUpdate(loadingToastId, {
        render: `Error loading data: ${error.message}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
              Photo Gallery
            </h1>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search photos..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <Skeleton key={index} className="h-48" />
              ))}
            </div>
          ) : (
            <>
              {filteredData.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <FiImage size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-700">
                    No photos found
                  </h3>
                  <p className="text-gray-500 mt-1">
                    {searchTerm
                      ? "Try a different search term"
                      : "No photos available"}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredData.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="relative aspect-square bg-gray-100">
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-gray-800 line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <span>ID: {item.id}</span>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-blue-500 hover:text-blue-700 flex items-center"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink className="mr-1" size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Modal for selected item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Photo Details
                </h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">
                    {selectedItem.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Album ID</p>
                      <p>{selectedItem.albumId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Photo ID</p>
                      <p>{selectedItem.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Thumbnail</p>
                      <a
                        href={selectedItem.thumbnailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                      >
                        View <FiExternalLink className="ml-1" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Axios;
